<h1>wspromise</h1>

mutexlight is a zero-dependencies minimal mutex library.

## Requirements

It runs inside any webbrowser or node environment that supports promises.

## Basic usage

The following sample code should speak for itself:

```js
const mutexlight = require("mutexlight");

const mutex = new mutexlight;

async function runme() {
  const release = await mutex.acquire();        // Acquire mutex lock
  // Do some stuff
  release();                                    // Release mutex lock
}

runme();
```

## Reference documentation


### API

Exposed API-list:
- `new mutexlight()`<br />
  Creates a new mutex.
- `this.acquire(tryonly)`<br />
  Returns a promise that resolves once the mutex lock has been acquired.
  The promise resolves to a release function which needs to be called as
  soon as the mutex lock needs to be released (acquired locks that are not
  explicitly released will stay stuck in locked state indefinately).
  If `trylock` is true, the promise will resolve to zero immediately if the
  mutex lock has already been acquired.

## References

Card-carrying member of the `zerodeps` movement.
