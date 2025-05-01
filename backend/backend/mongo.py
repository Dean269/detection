import motor.motor_asyncio
from decouple import config

MONGO_DB_URL = config('MONGO_DB_URL')

client = motor.motor_asyncio.AsyncIOMotorClient(MONGO_DB_URL)
database = client['your_database_name']
