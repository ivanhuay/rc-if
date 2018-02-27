# RcIf conditional rendering
for those who do not like to have many ternary operators or multiple functions render


## Usage
```javascript
import RcIf from 'rc-if';
...

render(){
  ...

  <RcIf if={condition} >
    <h1>I no longer miss ngif</h1>
  </RcIf>
  <RcIf else={othercondition} >
    <h1>I no longer miss v-if</h1>
  </RcIf>
}
```

### Clarification
without trying to offend this project is for those who do not like ternary operators or multiple functions render.
