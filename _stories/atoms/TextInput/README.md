 `<TextInput>`컴포넌트는 한 줄의 텍스트 또는 암호 입력을 할 수 있습니다. <br>
  `<FormGroup>`컴포넌트로 감싸는 방식으로 사용합니다.

**참고**: 이 컴포넌트는 onBlur, onClick 등과 같은 추가할 수 있는 모든 기능을 허용합니다.<br>
유일한 단점은 목록에 없는 props에 대한 검증이 없습니다.

*Recommended props*: `value`, `defaultValue` and `onChange`.*

**제어되지 않은 예:**

```
_handleSubmit = ({ target }) => console.log(target.username.value);

render() {
    return (
        <form onSubmit={ this._handleSubmit }>
            <TextInput
                name="username"
                type="text"
                defaultValue={ 'A default username' }
            />
        </form>
    );
}
```

**Controlled example:**
```
state = {
    username: ''
}

_handleInputChange = ({ target }) => this.setState({ username: target.value });

render() {
    return (
        <TextInput
            name="username"
            type="text"
            onChange={ this._handleInputChange }
            value={ this.state.username }
        />
    );
}
```
