import About from './About';
export default function Contact(props) {
  return (
    <div className="h-132.5 flex flex-col items-center justify-center bg-blue-50">
      <div><h1>hellooooooo contact</h1></div>
      <About data2={props.data1} />
    </div>
  );
}
