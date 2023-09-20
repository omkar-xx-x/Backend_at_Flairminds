function binarySearch(nums , target){
    let low = 0 , high = nums.length-1;
    while(low < high){
        let mid = low + (high - low)/2;
        if(nums[mid] == target){
            return mid;
        }else if(nums[mid]  < target){
            low = mid + 1;
        }else {
            high = mid - 1; 
        }
    }
    return -1;
}
let nums = [ 5, 6, 8, 15, 16 ];
let target = 6;
console.log(binarySearch(nums , target));