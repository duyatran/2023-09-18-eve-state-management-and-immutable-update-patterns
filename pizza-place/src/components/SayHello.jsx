// export default function SayHello(props) {
//   return <p>Hello ${props.name} ${props.occupation}</p>
// }


export default function SayHello({name, occupation}) {
  return <p>Hello {name} {occupation}</p>
}