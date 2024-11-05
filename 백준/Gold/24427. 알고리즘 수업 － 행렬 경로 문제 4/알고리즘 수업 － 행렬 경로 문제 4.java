import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        // 입력
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        // 결과
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int N = Integer.parseInt(br.readLine());
        int[][] arr = new int[N + 1][N + 1];

        for (int i = 1; i <= N; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine(), " ");
            for (int j = 1; j <= N; j++) {
                arr[i][j] = Integer.parseInt(st.nextToken());
            }
        }

        int[][] DP1 = new int[N + 1][N + 1];
        for (int i = 1; i <= N; i++) {
            for (int j = 1; j <= N; j++) {
                DP1[i][j] = Math.max(DP1[i - 1][j], DP1[i][j - 1]) + arr[i][j];
            }
        }

        int[][] DP2 = new int[N + 1][N + 1];
        for (int[] row : DP2) {
            Arrays.fill(row, Integer.MIN_VALUE);
        }

        int M = Integer.parseInt(br.readLine());
        for (int i = 1; i <= M; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine(), " ");
            int r = Integer.parseInt(st.nextToken());
            int c = Integer.parseInt(st.nextToken());
            DP2[r][c] = DP1[r][c];
        }

   
        for (int i = 1; i <= N; i++) {
            for (int j = 1; j <= N; j++) {
                if (DP2[i - 1][j] != Integer.MIN_VALUE) {
                    DP2[i][j] = Math.max(DP2[i][j], DP2[i - 1][j] + arr[i][j]);
                }
                if (DP2[i][j - 1] != Integer.MIN_VALUE) {
                    DP2[i][j] = Math.max(DP2[i][j], DP2[i][j - 1] + arr[i][j]);
                }
            }
        }

        bw.write(String.valueOf(DP2[N][N]));
        bw.flush(); 
        bw.close();
        br.close();
    }
}
