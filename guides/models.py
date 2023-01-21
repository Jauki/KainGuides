from django.db import models
from django.db.models import CASCADE


class Department(models.Model):
    name = models.CharField(max_length=100, primary_key=True)

    def get_by_natural_key(self, pk):
        return self.get(pk=pk)


class SchoolClass(models.Model):
    class_name = models.CharField(max_length=7, primary_key=True)
    department = models.ForeignKey(Department, on_delete=CASCADE)


class Guide(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    school_class = models.ForeignKey(SchoolClass, on_delete=CASCADE)


class Tour(models.Model):
    guide = models.ForeignKey(Guide, on_delete=CASCADE)
    visitors = models.IntegerField()
    potential_students = models.IntegerField()
    start_time = models.DateTimeField(auto_now_add=True)
    end_time = models.DateTimeField(null=True)
    department = models.ForeignKey(Department, on_delete=CASCADE)
