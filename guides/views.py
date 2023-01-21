from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.status import HTTP_201_CREATED, HTTP_400_BAD_REQUEST, HTTP_404_NOT_FOUND, HTTP_204_NO_CONTENT
from rest_framework.views import APIView

from guides.serializers import TourSerializer, GuideSerializer, DepartmentSerializer
from guides.models import Tour, Guide, Department, SchoolClass
from datetime import datetime


class TourList(APIView):

    def get(self, request):
        tours = Tour.objects.all()
        serializer = TourSerializer(tours, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = TourSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=HTTP_201_CREATED)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)


class TourDetail(APIView):

    def get_object(self, pk):
        try:
            return Tour.objects.get(pk=pk)
        except Tour.DoesNotExist:
            raise HTTP_404_NOT_FOUND

    def get(self, request, pk):
        tour = self.get_object(pk)
        serializer = TourSerializer(tour)
        return Response(serializer.data)

    def put(self, request, pk):
        tour = self.get_object(pk)
        serializer = TourSerializer(tour, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, ):
        try:
            tour = self.get_object(pk)
            tour.delete()
            return Response(status=HTTP_204_NO_CONTENT)
        except Exception as ex:
            return Response(status=HTTP_404_NOT_FOUND)


class TourEnd(APIView):
    def get_object(self, pk):
        try:
            return Tour.objects.get(pk=pk)
        except Tour.DoesNotExist:
            raise HTTP_404_NOT_FOUND

    def post(self, request, pk):
        tour = self.get_object(pk)
        tour.end_time = datetime.now()
        tour.save()
        serializer = TourSerializer(tour)
        return Response(serializer.data)


class TourResume(APIView):
    def get_object(self, pk):
        try:
            return Tour.objects.get(pk=pk)
        except Tour.DoesNotExist:
            raise HTTP_404_NOT_FOUND

    def post(self, request, pk):
        tour = self.get_object(pk)
        tour.end_time = None
        tour.save()
        serializer = TourSerializer(tour)
        return Response(serializer.data)


class GuideList(APIView):

    def get(self, request):
        guides = Guide.objects.all()
        serializer = GuideSerializer(guides, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = GuideSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=HTTP_201_CREATED)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)


class GuideDetail(APIView):

    def get_object(self, pk):
        try:
            return Guide.objects.get(pk=pk)
        except Guide.DoesNotExist:
            raise HTTP_404_NOT_FOUND

    def get(self, request, pk):
        guide = self.get_object(pk)
        serializer = GuideSerializer(guide)
        return Response(serializer.data)

    def put(self, request, pk):
        guide = self.get_object(pk)
        serializer = GuideSerializer(guide, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, ):
        try:
            guide = self.get_object(pk)
            guide.delete()
            return Response(status=HTTP_204_NO_CONTENT)
        except Exception as ex:
            return Response(status=HTTP_404_NOT_FOUND)


class DepartmentList(APIView):

    def get(self, request):
        departments = Department.objects.all()
        serializer = DepartmentSerializer(departments, many=True)
        return Response(serializer.data)
