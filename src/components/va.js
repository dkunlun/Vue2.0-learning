// import { Toast } from 'mint-ui';

var va = {};

//正则表
var regList = {
	Mobile: /^1[3|5|8|7]\d{9}$/,
	BankNum: /^\d{10,19}$/,
	Mail: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
	isNum: /^[0-9]*$/,
	isNegative: /^-[0-9]*[1-9][0-9]*$/
};

va.install = function (Vue, options) {
	Vue.directive('va', {
		bind: function(el, binding, vnode) {
			var vm = vnode.context,
				type = binding.arg,
				tag = el.getAttribute('tag'),
				modifiers = binding.modifiers;

			vm.vaResult || (vm.vaResult = {});//验证器的结果集
			!modifiers.require ? vm.vaResult[el.name] = false 
				: vm.vaResult[el.name] = true;//修饰符是否必填
			
			el.addEventListener('change', (e) => {
				var value = el.value;
				var result = true;//验证结果
				//判断是否必填
				if(modifiers.require) {
					result = regList[type].test(value)
				} else {
					if(value.trim() != '') {
						result = regList[type].test(value)
					}
				}

				vm.vaResult[el.name] = result;

				if(!result) {
					// Toast(`${tag}格式错误！`);
				}
			})
		}
	})
}

export default va