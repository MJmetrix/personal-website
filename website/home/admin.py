from django.contrib import admin
from .models import Project, ProjectTag, Timeline

# Register your models here.

class ProjectTagAdmin(admin.ModelAdmin):
    model = ProjectTag
    list_display = ('name',)
    search_fields = ('name',)

class ProjectAdmin(admin.ModelAdmin):
    model = Project
    list_display = ('title', 'get_tags', 'created_on',)
    list_filter = ('tags', )
    filter_horizontal = ('tags', )
    search_fields = ('name',)

    def get_tags(self, obj):
        return ", ".join([c.name for c in obj.tags.all()])
    get_tags.short_description = "Tags"

class TimelineAdmin(admin.ModelAdmin):
    model = Timeline
    list_display = ('year', 'month', 'timeline_title', 'timeline_description', 'created_on',)
    list_filter = ('created_on',)
    search_fields = ('timeline_title',)

admin.site.register(ProjectTag, ProjectTagAdmin)
admin.site.register(Project, ProjectAdmin)
admin.site.register(Timeline, TimelineAdmin)