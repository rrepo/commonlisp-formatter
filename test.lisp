

(setq *print-level* nil) 

(setq *print-length* nil) ; (defparameter *nodes* '( 
 ; (living-room 
 ; (you are in the living room. a wizard is snoring loudly on the couch.)) 
 ; (garden 
 ; (you are in a beautiful garden. there is a well front of you.)) 
 ; (attic 
 ; (are you in the attic. there is a giant welding torch in the corner.)) ) ) 
 

(defun describe-location (location nodes) 
  (cadr 
    (assoc location nodes)) ) 

(describe-location 'living-room *nodes*) 

(defparameter *edges* `( 
  (living-room (garden west door) ;ffdffd 
 
    (attic upstairs ladder)) ;test 
 
  (garden 
    (living-room east door)) 
;; test 
 
  (attic 
    (living-room downstairs ladder)) ) ) 

(defun describe-path (edge) `(these is a , (caddr edge) going , (cadr edge) from here.) ) 

(describe-path '(garden west door)) 

(defun describe-paths (location edges) 
  (apply #'append 
    (mapcar #'describe-path 
      (cdr 
        (assoc location edges)))) ) 

(defun nodes->dot (nodes) 
  (mapc 
    (lambda (node) (fresh-line) 
      (princ (dot-name (car node))) (princ "[label=\"") 
      (princ (dot-label node)) (princ "\"];")) nodes))
 ; 
 
        (nodes->dot *wizard-nodes*) 
        (defun edges->dot (edges) 
          (mapc 
            (lambda (node) 
              (mapc 
                (lambda (edge) (fresh-line) 
                  (princ (dot-name (car node))) (princ "->") 
                  (princ (dot-name (car edge))) (princ "[label=\"") 
                  (princ 
                    (dot-label (cdr edge))) (princ "\"];")) (cdr node))) 
 edges)) 
                (edges->dot *wizard-edges*) 
                (defun graph-dot (nodes edges) (princ "digraoh{") (nodes->dot nodes) (edges->dot edges) (princ "}") )