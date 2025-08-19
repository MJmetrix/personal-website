from django.contrib import admin
from .models import Project, ProjectCategory

# Register your models here.

class ProjectCategoryAdmin(admin.ModelAdmin):
    model = ProjectCategory
    list_display = ('name',)
    search_fields = ('name',)

class ProjectAdmin(admin.ModelAdmin):
    model = Project
    list_display = ('title', 'category', 'created_on')
    list_filter = ('category', )
    search_fields = ('name',)

admin.site.register(ProjectCategory, ProjectCategoryAdmin)
admin.site.register(Project, ProjectAdmin)