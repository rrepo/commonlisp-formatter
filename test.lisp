

(defun iota 
  (counter &optional (start 0)) 
  (if (= counter 0) nil 
    (cons start 
      (iota (- counter 1) (+ start 1))))) 

(defun fizz_buzz (num) 
  (cond 
    ( 
      (and (= 0 (mod num 3)) (= 0 (mod num 5))) "FizzBuzz") ; test
    ((= 0 (mod num 3)) "Fizz") 
    ((= 0 (mod num 5)) "Buzz")(t num))) 

(format t "~{~a ~}" 
  (mapcar #'fizz_buzz (iota 100 1)))