{
  draft: false
  title: Async Patterns in Django
  date: 2025-01-06T05:00:00.000Z
  description: Recipes for asynchronous coding in Django
  template: talk.html
}

## Async Patterns in Django

Paul Bailey

- Slides:<br>[neutron.studio/talks/2025-01-06-async-django/](https://www.neutron.studio/talks/2025-01-06-async-django/)
- 40% Off, Async Patterns in Django Book:<br>[bit.ly/async-django-40](https://bit.ly/async-django-40)
- Code Examples:<br>[github.com/pizzapanther/async-django-book-code](https://github.com/pizzapanther/async-django-book-code)

---

## About Me

- Former Aerospace Engineer
- 20yrs professionally coding
- Started using Django in Version 0.96
- Currently Principal Engineer at Clarity

---

## What is Asynchronous Programming

A technique of programming which allows one to continue processing while other tasks are being waited upon.

---

## Example

```python
def long_running():
  time.sleep(10)

thing1()
long_running()
thing2()
```

vs

```python
async def long_running():
  await time.sleep(10)

await asyncio.gather(
  thing1(),
  long_running(),
  thing2(),
)
```

---

## The Async Loop

![Async Loop](/talks/async-loop.png)

---

## What Should I Async?

| Resource  | Cost of Access |
| --- | --- |
| L1 Cache | 3 cycles |
| L2 Cache | 14 Cycles |
| RAM | 250 Cycles |
| Disk | 41,000,000 Cycles |
| Network | 240,000,000 Cycles |

---

## Async Web Protocols

- WebSockets
- Streaming
- Server Sent Events
- Long Polling

---

## ASGI vs WSGI

- [Daphne](https://pypi.org/project/daphne/)
- [Hypercorn](https://github.com/pgjones/hypercorn)
- [Uvicorn](https://www.uvicorn.org/)

---

## WebSockets

bidirectional web communications

![WebSockets](/talks/websocket.png)

---

## WebSockets asgi.py Setup

```python
# asgi.py
application = get_asgi_application()
```

```python
# if you plan to use websockets
def get_websocket_application():
  http_app = get_asgi_application()

  async def app(scope, receive, send):
    if scope["type"] == "websocket":
      return await ws_app(scope, receive, send)

    return await http_app(scope, receive, send)

  return app
```

Or Simplify with https://github.com/pizzapanther/django-ws

---

## Websocket Example

```python
from django_ws import WebSocketHandler

class MySocket(WebSocketHandler):
  async def on_open(self):
    do_something_on_open()

  async def on_message(self, data):
    do_something_on_msg()

    # send json data
    await self.send({"reply": "sending data back"})

  async def on_close(self):
    do_something_on_close()
```

---

## Streaming

Sending data in chunks over a long lived HTTP connection

<iframe src="https://giphy.com/embed/vxXj8zguPhSgkZE8sw" height="266" style="" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

---

## Streaming Example

```python
async def streaming_response():
  try:
    # Do some work here
    async for chunk in my_streaming_iterator():
      yield chunk
  except asyncio.CancelledError:
    # Handle disconnect
    raise

async def my_streaming_view(request):
  return StreamingHttpResponse(streaming_response())
```

---

## Server Sent Events

Unidirectional data sent over a long lived HTTP Request

https://github.com/pizzapanther/django-async-sse

---

## SSE Protocol

```
Content-Type: text/event-stream
Cache-Control: no-cache
Connection: keep-alive

event: userconnect
data: {"username": "bobby", "time": "02:33:48"}

event: usermessage
data: {"username": "bobby", "time": "02:34:11", "text": "Hi everyone."}
```

---

## SSE Example

```python
from django_asse import SseStreamView, JsonEvent

class WeatherStream(SseStreamView):
  async def stream(self, request, lat, lng):
    last_update = None

    while 1:
      wp = await WeatherPoint.objects.filter(point=f"{lat},{lng}").afirst()

      if wp and wp.created != last_update:
        last_update = wp.created
        yield JsonEvent(event='weather', data=wp.data['current'])

      yield JsonEvent(event='ping', data=None)
      await asyncio.sleep(30)
```

---

## Long Polling

![Long Polling](/talks/long-polling.png)

---

## Long Polling Example

```python
async def weather_stream(request, lat, lng):
  last_id = request.POST.get('last_id')

  while 1:
    wp = await WeatherPoint.objects.filter(point=f"{lat},{lng}").afirst()
    if last_id and wp and str(wp.id) == last_id:
      await asyncio.sleep(30)
      continue

    return http.JsonResponse({'id': wp.id, 'weather': wp.data['current']})
```

---

## Async By Service

- [Pusher](https://pusher.com/)
- [Ably](https://ably.com/)
- [Soketi](https://soketi.app/)

<iframe src="https://giphy.com/embed/XQ982Xxy3rt20iOeJ7" height="300" style="" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

---

## Async Service Example

```python
wpoint = WeatherPoint(point=f"{lat},{lng}", weather_data=data)
wpoint.save()

pusher_client = pusher.Pusher(
  app_id=settings.PUSHER_APP_ID,
  key=settings.PUSHER_KEY,
  secret=settings.PUSHER_SECRET,
  cluster=settings.PUSHER_CLUSTER,
  ssl=True
)
pusher_client.trigger(f"{lat},{lng}", "current-weather", data["current"])
```

---

<iframe src="https://giphy.com/embed/lD76yTC5zxZPG" width="480" height="350" style="" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

- Slides:<br>[neutron.studio/talks/2025-01-06-async-django/](https://www.neutron.studio/talks/2025-01-06-async-django/)
- 40% Off, Async Patterns in Django Book:<br>[bit.ly/async-django-40](https://bit.ly/async-django-40)
- Code Examples:<br>[github.com/pizzapanther/async-django-book-code](https://github.com/pizzapanther/async-django-book-code)
