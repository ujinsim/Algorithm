import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(br.readLine());
        String[] input = br.readLine().split(" ");

        int[] numbers = new int[n];
        Integer[] originalIndexes = new Integer[n];

        for (int i = 0; i < n; i++) {
            numbers[i] = Integer.parseInt(input[i]);
            originalIndexes[i] = i;
        }


        Arrays.sort(originalIndexes, (a, b) -> Integer.compare(numbers[a], numbers[b]));

        int maxMove = 0;
        for (int i = 0; i < n; i++) {
            maxMove = Math.max(maxMove, originalIndexes[i] - i);
        }

        System.out.println(maxMove); 
    }
}
