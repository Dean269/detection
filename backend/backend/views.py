from django.http import JsonResponse
from django.views import View
from backend import settings

class UploadTextView(View):
    async def post(self, request):
        body = await request.body
        import json
        data = json.loads(body)

        text = data.get("text")
        if not text:
            return JsonResponse({"error": "Text is required"}, status=400)

        # Insert into MongoDB
        result = await settings.mongo_db["texts"].insert_one({
            "text": text
        })

        return JsonResponse({"inserted_id": str(result.inserted_id)})
