import django_filters
from rest_framework import viewsets, filters

from .models import Entry
from .serializer import EntrySerializer


class EntryViewSet(viewsets.ModelViewSet):
    queryset = Entry.objects.all().order_by('-created_at')
    serializer_class = EntrySerializer
