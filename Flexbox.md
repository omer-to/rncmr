**_Flexbox_**

_Flex_

The flex value is a number that represents the ratio of space that a
component should take up, relative to its siblings.

    The flex attribute of a component determines only its dimension along the primary axis

    *flex: 1 means expand to fill its parent*
    *flex: 0 means shrink to the min space*

_Flex Container_

    • flexDirection: column | row | column-reverse | row-reverse
    • justifyContent: flex-start | flex-end | center | space-around | space-between | space-evenly
    • alignItems: stretch | flex-start | flex-end | center

_Top Level Hidden View_

```javascript
{
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch'
}
```
