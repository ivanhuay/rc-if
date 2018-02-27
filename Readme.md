# ReIf conditional rendering
for those who do not like to have many ternary operators or multiple functions render


## Usage
```javascript
import ReIf from 're-if';
...

render(){
  ...

  <ReIf if={condition} >
    <h1>I no longer miss ngif</h1>
  </ReIf>
  <ReIf else={othercondition} >
    <h1>I no longer miss v-if</h1>
  </ReIf>
}
```

### Clarification
without trying to offend this project is for those who do not like ternary operators or multiple functions render
