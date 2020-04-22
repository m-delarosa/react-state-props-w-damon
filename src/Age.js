import React from "react"

//Class Component Example
// export default class Age extends React.Component {
//   //This is what is happening in the background, we don't need to write it.
//   //   constructor(props) {
//   //     this.props = props
//   //   }

//   render() {
//     console.log(this.props)
//     return <h2>I am {this.props.age} years old</h2>
//   }
// }

//Functional Component Example
//No use of "this" in functional components.
export default function Age(props) {
  console.log(props)

  return <h2>I am {props.age} years old</h2>
}
