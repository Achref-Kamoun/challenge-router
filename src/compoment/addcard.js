import {Container, Form,Button} from 'react-bootstrap'


function AddCard (){
    return(
<div>
<Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="text" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" rows={1} />
  </Form.Group>
</Form>
</div>
    )
}
 export default AddCard