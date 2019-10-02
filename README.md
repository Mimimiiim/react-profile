# react-profile

## COMPONENT

- Card : 프로필 정보를 담고 있는 컴포넌트

## PROPS

1.Card의 props
- name : 이름을 담는 props
- desc[] : 설명을 라인별로 저장해놓은 props
- likeAnimal[] : 좋아하는 동물리스트를 저장해놓은 props

## STATE

- card : 한 사람의 name, desc[]를 담는 state
- animal[] : 한 사람의 좋아하는 동물리스트를 담는 state

## 고민거리
1. Props와 State는 어떤 상황에서 다르게 사용될까?
   
    - props는 부모 컴포넌트가 자식 컴포넌트에게 주는 값들이므로, 자식 컴포넌트에서는 값을 받아오기만 하고 변경하지 못합니다.<br/>
     하지만 state는 컴포넌트 내부에서 선언하며, 컴포넌트 내부에서 값을 변경할 수 있습니다.<br/>
     그렇기 때문에 props는 초기값을 저장할 때 또는 defaultValue에 사용되고, state는 변수 값를 얻기 위해 사용됩니다.