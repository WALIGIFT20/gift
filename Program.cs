

namespace guess
{
    class Program
    {
        static void Main(string[] args)
        {
                    /* The following codes creates a guess game that instruct you on the range of number your guess will be subject to and also helps to give you clues on when your guess is high or low and also inform you how many times you had to try before you guessed right */
                    while(true)
                    {
                        Random number = new Random();
                        int secretNumber = number.Next(0, 21);
                        int tries = 0;
                        
                    while(true)
                    {
                        Console.Write("Enter a number between 0 and 21");
                        int input = Convert.ToInt32(Console.ReadLine()); 

                            if(input < secretNumber)
                        {
                            Console.WriteLine("Too low");
                            ++tries;
                            continue;
                        }
                        else if(input > secretNumber)
                        {
                            Console.WriteLine("Too high");
                            ++tries;
                            continue;
                        }
                        
                        else if(input == secretNumber){
                            ++tries;
                                Console.WriteLine($"Congratulations!!🎆🎆 You guessed right.The secret number is actually {secretNumber}\n\nIt took you {tries} tries to guess right.");
                                break;
                        }     
                }
            }
        }
    }
}


