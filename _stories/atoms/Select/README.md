`<Select>`컴포넌트는 사용자가 옵션의 값을 선택할 수 있게 합니다.<br>
`<FormGroupLabel>`컴포넌트를 사용할 경우에는 반드시 `<FormGroup>`컴포넌트로 감싸서 함께 사용해야 합니다.

*Recommended Props*: `name`, `value`, `defaultValue`, `onChange`

**Uncontrolled example**:
```
_handleSubmit = ({ target }) => console.log(target.fruit.value);

render() {
    return (
        <form onSubmit={ this._handleSubmit }>
            <FormGroup>
                <FormGroupLabel text="Fruits" />
                <Select
                   options={ myOptions }
                   name="fruit"
                   defaultValue="3"
                />
            </FormGroup>
        </form>
    );
}
```

**Controlled example**:
```
// Your state holds the name of each of your parent component's selects (if you have multiple selects on a page)
// You should give your state the default value you want it to have (the first value if it doesn't matter)
    state {
        fruit: 1,
        vegetable: 1
    }

    _handleSelectChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };
    render() {
        return (
            <FormGroup>
                <FormGroupLabel text="Fruits" />
                <Select
                   options={ myOptions }
                   name="fruit"
                   value={ this.state.fruit }
                   onChange={ this._handleSelectChange }
                />
            </FormGroup>
        )
    }
    
const myOptions = [
    { name: 'bananas', value: 1 },
    { name: 'apples', value: 2 }
];
```
