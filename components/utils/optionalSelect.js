import { select } from '@storybook/addon-knobs';

/**
    https://beomy.tistory.com/4
    https://www.zerocho.com/category/JavaScript/post/57433645a48729787807c3fd

    1. 구문
    fun.apply([thisObj[,argArray]])

    2. 매개 변수
    fun : 가져다쓸 메소드
    thisObj : (선택 사항) 현재 객체로 사용될 객체
    argArray : 함수에 전달될 인수 집합

    3. call과 apply의 차이
    call 메소드와 동일 하나, call 메소드는 인자 하나 하나를, apply는 인자 리스트를 전달

    4. call, apply 함수의 사용의 이유
    : this를 함수의 인자로 넘김으로써 this의 값을 사용할수도 있으며 변경도 가능
    : 함수의 arguments를 조작할 때 사용

    * arguments는 함수라면 처음부터 갖고 있는 숨겨진 속성
    - 함수에 들어온 인자를 배열 형식으로(배열은 아님. 유사 배열) 반환
    - 유사 배열이기 때문에, 배열의 메소드는 쓸 수 없음
    - arguments는 모양만 배열이지 실제 배열이 아니라서 배열의 메소드를 쓰면 에러 발생
    (이 때 바로 call이나 apply가 효력을 발휘)
**/

export function optionalSelect() {
    return select.apply(null, arguments) || undefined;
}
