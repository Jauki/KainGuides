from rest_framework import serializers
from rest_framework.relations import PrimaryKeyRelatedField

from guides.models import Tour, Guide, Department


class TourSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tour
        fields = "__all__"
        read_only_fields = ["start_time", "end_time"]


class GuideSerializer(serializers.ModelSerializer):
    class Meta:
        model = Guide
        fields = "__all__"


class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = "__all__"
