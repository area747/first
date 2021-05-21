/* .eslintrc.js */
module.exports = {
    parser: '@typescript-eslint/parser', // ESLint 파서를 지정한다.
    extends: [
        'plugin:@typescript-eslint/recommended', // @typescript-eslint/eslint-plugin 규칙을 사용한다.
    ],
    rules: {
        // ESLint 규칙을 작성한다. 앞서 extend 한 규칙들을 덮어쓸 수 도 있다.
        // 예시 "@typescript-eslint/explicit-function-return-type": "off",

    },
}