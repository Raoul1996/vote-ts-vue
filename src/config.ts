export default {
  url: {
    // nginx 配置后端到 api 路由
    baseUrl: '/api',
  },
  timeout: 5000,
  regField: {
    ref: 'register',
    model: 'register',
    items: [{
      type: 'text',
      label: 'name',
      prop: 'name',
      model: 'name',
      placeholder: 'Please pick a name',
      validation: [
        {required: true, message: 'Please input username', trigger: 'blur'}
      ]
    }, {
      type: 'text',
      label: 'email',
      prop: 'email',
      model: 'email',
      placeholder: 'Please input email address',
      validation: [
        {required: true, message: 'Please input a email', trigger: 'blur'},
        {type: 'email', message: 'Please use a current email address', trigger: 'blur'}
      ]
    }, {
      type: 'text',
      label: 'mobile',
      prop: 'mobile',
      model: 'mobile',
      placeholder: 'Please input mobile number',
      validation: [
        {required: true, message: '请填写手机号码', trigger: 'blur'},
        {len: 11, message: '请填写 11 位手机号码', trigger: 'blur'}
      ]
    }, {
      type: 'password',
      label: 'password',
      prop: 'pwd',
      model: 'pwd',
      placeholder: 'Please input your password',
      validation: [
        {required: true, message: '请填写密码', trigger: 'blur'},
        {min: 6, message: '密码需要大于 6 位', trigger: 'blur'}
      ],
    }]
  },
  loginField: {
    ref: 'login',
    model: 'login',
    items: [
      {
        type: 'text',
        label: 'email',
        prop: 'email',
        model: 'email',
        placeholder: 'Please input email address',
        validation: [
          {required: true, message: 'Please input a email', trigger: 'blur'},
          {type: 'email', message: 'Please use a current email address', trigger: 'blur'}
        ]
      }, {
        type: 'password',
        label: 'password',
        prop: 'pwd',
        model: 'pwd',
        placeholder: 'Please input your password',
        validation: [
          {required: true, message: '请填写密码', trigger: 'blur'},
          {min: 6, message: '密码需要大于 6 位', trigger: 'blur'}
        ],
      }
    ]
  }
}
