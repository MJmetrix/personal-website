from django.db import models
from django.urls import reverse

class ProjectCategory(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.name

    class Meta:
        ordering = ["name"]
        verbose_name = "Project Category"
        verbose_name_plural = "Project Categories"

class Project(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    link = models.TextField()
    category = models.ForeignKey(ProjectCategory, on_delete=models.SET_NULL, null=True, related_name="project_category")
    created_on = models.DateTimeField(auto_now_add=True)
    STATUS_CHOICES = [
        ('completed', 'Completed'),
        ('ongoing', 'Ongoing'),
    ]
    status = models.CharField(max_length=20, choices=STATUS_CHOICES)

    def __str__(self):
            return self.title

    project_image = models.ImageField(upload_to='home/project_images/', blank=True, null=True)

    class Meta:
        verbose_name = 'Project'
        verbose_name_plural = 'Projects'
        ordering = ["-created_on"]
