# webpack2-example
Messing around with webpack 2


## Question 1

Why does the new `alias` config not seem to work:

<img width="784" alt="screen shot 2016-02-01 at 9 08 15 am" src="https://cloud.githubusercontent.com/assets/246143/12724656/bb8b8d12-c8c3-11e5-94e2-f640594b0341.png">

See: https://gist.github.com/sokra/27b24881210b56bbaff7

Answer, wrap it in `resolve`: 


```
{ resolve: { alias: { /* aliases... */ } }
```

## Question 2

The `browser` field doesn't seem to work anymore?

Swap `mainFields: ['main', 'browser']` with `mainFields: ['browser', 'main']`
