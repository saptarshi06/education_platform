import java.util.*;

public class ankan{
    public static Vector<Integer> amount(int n){
        Vector<Integer> vec= new Vector();
        while(n>0){
        if(n>2000){
            vec.addElement(2000);
            n-=2000;
        }
        if(n>500){
            vec.addElement(500);
            n-=500;
        }
        if(n>200){
            vec.addElement(100);
            n-=200;
        }
        if(n>100){
            vec.addElement(100);
            n-=100;
        }
        if(n>50){
            vec.addElement(50);
            n-=50;
        }
        if(n>20){
            vec.addElement(10);
            n-=20;
        }
        if(n>10){
            vec.addElement(10);
            n-=10;
        }
        if(n>5){
            vec.addElement(5);
            n-=5;
        }
        if(n>2){
            vec.addElement(2);
            n-=2;
        }
        if(n>1){
            vec.addElement(1);
            n-=1;
        }
    }
    return vec;
    }
    
    public static void main(String args[]){
        int n=2530;
        Vector<Integer> vec = amount(n);
    
     for (Integer i = 0; i < vec.size(); i++)
        {
        System.out.print(vec.get(i) + " ");
     }
    }
}