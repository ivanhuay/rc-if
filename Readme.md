# RcIf conditional rendering
for those who do not like to have many ternary operators or multiple functions render


## Usage
```javascript
import RcIf, {RcElse} from 'rc-if';
...

render(){
  ...

  <RcIf if={condition} >
    <h1>I no longer miss ngif</h1>
  </RcIf>
  <RcIf if={othercondition} >
    <h1>I no longer miss v-if</h1>
    <RcElse>
      <h1>I love react</h1>
    </RcElse>
  </RcIf>
}
```

### Clarification
without trying to offend this project is for those who do not like ternary operators or multiple functions render.


## v0.0.4
* RcElse Added: RcElse will render when condition is false.
