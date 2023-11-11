const productExceptSelf = (nums: number[]): number[] => {
  const result = new Array(nums.length).fill(1)
  let prefix = 1
  let postfix = 1

  for (let i = 0; i < nums.length; ++i) {
    result[i] *= prefix
    result[nums.length - 1 - i] *= postfix
    prefix *= nums[i]
    postfix *= nums[nums.length - 1 - i]
  }

  return result
}

const nums = [2, 3, 4]

console.log(productExceptSelf(nums))
