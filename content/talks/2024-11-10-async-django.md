---
template: talk
draft: false
title: Async Patterns in Django
date: 2024-11-10T05:00:00.000Z
description: Recipes for asynchronous coding in Django
layout: talk
---
## Async Patterns in Django

Paul Bailey

- Slides:<br>[neutron.studio/talks/2024-11-10-async-django/](https://www.neutron.studio/talks/2024-11-10-async-django/)
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

## ASGI Before Start

- [Daphne](https://pypi.org/project/daphne/)
- [Hypercorn](https://github.com/pgjones/hypercorn)
- [Uvicorn](https://www.uvicorn.org/)

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

## Streaming

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

---

## Long Polling

---

## Other Topics in the Book

---

<iframe src="https://giphy.com/embed/lD76yTC5zxZPG" width="480" height="350" style="" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

- Slides:<br>[neutron.studio/talks/2024-11-10-async-django/](https://www.neutron.studio/talks/2024-11-10-async-django/)
- 40% Off, Async Patterns in Django Book:<br>[bit.ly/async-django-40](https://bit.ly/async-django-40)
- Code Examples:<br>[github.com/pizzapanther/async-django-book-code](https://github.com/pizzapanther/async-django-book-code)
