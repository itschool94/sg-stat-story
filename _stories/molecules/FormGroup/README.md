`<FormGroup>` 컴포넌트는 입력 양식을 감싸는데 사용됩니다.
간단한 텍스트 입력의 경우, `<FormGroupLabel>`, `<TextInput>`, 그리고 `<FormGroupTextHelp>`컴포넌트를 포함합니다.

하지만, 이는 작업 유형에 따라 달라질 수 있습니다. Context는 선택 사항이며 경고 또는 안내 문구에 대한 표시를 필요가 없다면 제외할 수도 있습니다.

*TextInput example*:

```
<FormGroup context="danger">
    <FormGroupLabel .../>
    <TextInput .../>
    <FormGroupTextHelp .../>
</FormGroup>
```

**Select example**:
```
<FormGroup>
    <FormGroupLabel .../>
    <Select .../>
</FormGroup>
```
