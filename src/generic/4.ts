/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

type T = {
  title: string;
}

interface IComponent {
  props: T;
}

class Component implements IComponent{
  constructor (public props:T) {
    this.props = props;
  }
}

class Page extends Component {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};