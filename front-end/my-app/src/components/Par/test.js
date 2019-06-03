 


console.log('asd')

// class Solution {
//     public int solution(int[][] A) {
//         // write your code in Java SE 8
        
//         int currentResult = numOfCompletedRows(A);
//         boolean columnsToFlip = new boolean[A.length];

        
//         for(int i=0;i<A[0].length;i++){
//             for(int j=i+1;j<)
//             flipColumns(A,i);
            
            
//             int resultAfterFlip = numOfCompletedRows(A);
//             if(currentResult < resultAfterFlip){
//                 currentResult=resultAfterFlip;
//             }
            
//             flipColumn(A,i);
//         }

//         return currentResult;
//     }
    
//     public boolean ifRowCompleted(int[] arr){
        
//         int num = arr[0];
        
//         for(int i=1;i<arr.length;i++){
//             if(num!=arr[i]){
//                 return false;
//             } 
//         }
        
//         return true;
//     }
    
//     public int numOfCompletedRows(int[][] matrix){
        
//         int result = 0;
//         for(int i=0;i<matrix.length;i++){
//             if(ifRowCompleted(matrix[i])){
//                 result++;
//             }
//         }
//         return result;
//     }
    
//     public void flipColumns(int[][] matrix, boolean[] arr){
//         for(int i=0;i<arr.length;i++){
//             if(arr[i]==true){
//                 flipColumn(matrix,i);
//             }
//         }
//     }
    
//     public void flipColumn(int[][] matrix, int columnIndex){
//         for(int i=0;i<matrix.length;i++){
//             if(matrix[i][columnIndex]==0){
//                matrix[i][columnIndex]=1; 
//             }
//             else{
//                 matrix[i][columnIndex]=0; 
//             }
//         }
//     }
    
    

// }