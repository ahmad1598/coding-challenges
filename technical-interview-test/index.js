var firstMissingPositive = function(nums) {
    var swap = function(i, j) {
        var tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
    };

    for (let i = 0; i < nums.length; i++) {
        while (0 < nums[i] && nums[i] - 1 < nums.length
                && nums[i] != i + 1
                && nums[i] != nums[nums[i] - 1]) {
            swap(i, nums[i] - 1);
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != i + 1) {
            return i + 1;
        }
    }
    return nums.length + 1;
};

function findNumber(values) {
    let result = [];
  
    for (let i = 0; i < values.length; ++i) {
      if (0 <= values[i]) {
        result[values[i]] = true;
      }
    }
    console.log(result)
  
    for (let i = 1; i <= result.length; ++i) {
      if (undefined === result[i]) {
        return i;
      }
    }
  
    return 1
  }
console.log(findNumber([1,3,6,4,1,2]))