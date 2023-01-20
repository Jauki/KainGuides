from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.status import HTTP_201_CREATED, HTTP_400_BAD_REQUEST, HTTP_404_NOT_FOUND
from rest_framework.views import APIView

from guides.Serializers import TourSerializer
from guides.models import Tour


class TourList(APIView):

    def get(self, request):
        tours = Tour.objects.all();
        serializer = TourSerializer(tours, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = TourSerializer(tours, many=True)
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
        tour = self.get_object(pk)
        tour.delete()
        return Response(status=HTTP_204_NO_CONTENT)

