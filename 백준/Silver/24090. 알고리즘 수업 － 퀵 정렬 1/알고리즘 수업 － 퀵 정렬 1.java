import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;

public class Main {

    static int swap_count = 0;
    static int k;
    static int first = -1;
    static int second = -1;

    public static void quickSort(int[] A, int p, int r) {
        if (p < r) {
            int q = partition(A, p, r);
            quickSort(A, p, q - 1);
            quickSort(A, q + 1, r);
        }
    }

    public static int partition(int[] A, int p, int r) {
        int x = A[r];
        int i = p - 1;

        for (int j = p; j < r; j++) {
            if (A[j] <= x) {
                i++;
                swap(A, i, j);
            }
        }

        if (i + 1 != r) {
            swap(A, i + 1, r);
        }
        return i + 1;
    }

    public static void swap(int[] A, int i, int j) {
        int temp = A[i];
        A[i] = A[j];
        A[j] = temp;
        swap_count++;

        if (swap_count == k) {
            first = Math.min(A[i], A[j]);
            second = Math.max(A[i], A[j]);
        }
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String[] firstLine = br.readLine().split(" ");
        int n = Integer.parseInt(firstLine[0]);
        k = Integer.parseInt(firstLine[1]);

        String[] secondLine = br.readLine().split(" ");
        int[] numbers = new int[n];

        for (int i = 0; i < n; i++) {
            numbers[i] = Integer.parseInt(secondLine[i]);
        }

        quickSort(numbers, 0, n - 1);

        if (swap_count < k) {
            System.out.println(-1);
        } else {
            System.out.println(first + " " + second);
        }
    }
}
