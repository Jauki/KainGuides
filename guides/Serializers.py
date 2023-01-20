from rest_framework import serializers

from guides.models import Tour


class TourSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tour
        fields = "__all__"
        read_only_fields = ["start_time","end_time"]