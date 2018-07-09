from sanic import Sanic
from sanic.response import json, file
from Naked.toolshed.shell import execute_js, muterun_js
from multiprocessing import Pool
import asyncio

app = Sanic()

#app.static('/static', '../static')

app.static('/', '../templates')
app.static('/static', '../static')

@app.route("/")
async def index(request):
    return await file('../templates/index.html')

def run_js():
    execute_js('wanted-military.js')

if __name__ == '__main__':
    pool = Pool(processes=1)     # Start a worker processes.
    result = pool.apply_async(run_js) 
    app.run(host='0.0.0.0', port=5000)