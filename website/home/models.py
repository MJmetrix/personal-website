from django.db import models
from django.urls import reverse

class ProjectTag(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.name

    class Meta:
        ordering = ["name"]
        verbose_name = "Project Tag"
        verbose_name_plural = "Project Tags"

class Project(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(max_length=160)
    link = models.TextField()
    tags = models.ManyToManyField(ProjectTag, blank=True, related_name="project_tags")
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
