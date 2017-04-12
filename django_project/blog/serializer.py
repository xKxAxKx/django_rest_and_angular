from rest_framework import serializers

from .models import Entry

class EntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Entry
        fields = ('id', 'title', 'body', 'created_at', 'updated_at')
