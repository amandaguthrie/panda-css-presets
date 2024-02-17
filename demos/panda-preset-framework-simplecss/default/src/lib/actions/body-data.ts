export function bodyData(attribute: string){
  return function(node: HTMLElement, value: string){
    node.dataset[attribute] = value;

    return {
      update(value: string){
        node.dataset[attribute] = value;
      },
      destroy() {
        delete node.dataset[attribute];
      }
    }
  }
}