function bubbleSort(nums){
    let n = nums.length;
    for(let i = 0 ; i < n-1 ; i++){
        let flag = true;
        for(let j = 0 ; j < n - 1 - i ; j++){
            if(Math.abs(nums[j]) > Math.abs(nums[j + 1])){
                let temp = nums[j];
                nums[j] = nums[j+1];
                nums[j+1] = temp;
                flag = false;
            }
        }
        if(flag == true){
            return nums;
        }
    }
    return nums;
}

let nums = [5, 12, -13, -10, -8, 20, 1] ;
console.log(bubbleSort(nums));
