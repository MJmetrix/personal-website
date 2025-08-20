from django.contrib import admin
from .models import Project, ProjectTag

# Register your models here.

class ProjectTagAdmin(admin.ModelAdmin):
    model = ProjectTag
    list_display = ('name',)
    search_fields = ('name',)

class ProjectAdmin(admin.ModelAdmin):
    model = Project
    list_display = ('title', 'get_tags', 'created_on')
    list_filter = ('tags', )
    filter_horizontal = ('tags', )
    search_fields = ('name',)

    def get_tags(self, obj):
        return ", ".join([c.name for c in obj.tags.all()])
    get_tags.short_description = "Tags"

admin.site.register(ProjectTag, ProjectTagAdmin)
admin.site.register(Project, ProjectAdmin)