/**
 * @class
 * @extends Language
 */
class Poland extends Language
{
    /**
     * @return {Map}
     * @method
     * @public
     */
    createMapping ()
    {
        return new Map([
            ["{{書き出し先の選択}}", "Wybór miejsca przeznaczenia eksportu"],
            ["{{画質}}", "jakość obrazu (film, wideo itp.)"],
            ["{{座標}}", "współrzędna"],
            ["{{MovieClipを編集}}", "Edytuj MovieClip."],
            ["{{親の階層へ移動}}", "Przejdź do hierarchii nadrzędnej"],
            ["{{ロックされたレイヤーです}}", "Zablokowana warstwa."],
            ["{{トゥイーンには複数のオブジェクトを設置できません}}", "Nie można umieścić wielu obiektów na tweenze."],
            ["{{名前が重複しています}}", "Duplikaty nazwisk."],
            ["{{名前は必須です}}", "Wymagana nazwa."],
            ["{{基準点}}", "punkt odniesienia"],
            ["{{自由変形ツール}}", "Darmowe narzędzie do transformacji"],
            ["{{キーフレームに変換}}", "Przekształcone w klatki kluczowe"],
            ["{{空のキーフレームに変換}}", "Konwersja na puste klatki kluczowe."],
            ["{{最初のフレームに移動}}", "Przejdź do pierwszej klatki"],
            ["{{最後のフレームに移動}}", "Przejdź do ostatniej klatki"],
            ["{{SWFを解析中}}", "Analizowane PFM."],
            ["{{JSONを生成}}", "Wygeneruj JSON"],
            ["{{ファイルを生成}}", "Wygenerować plik"],
            ["{{N2Dファイルの読み込み}}", "Ładowanie plików N2D."],
            ["{{JSONの読み込み}}", "Czytanie JSON."],
            ["{{データを解凍中}}", "Dane w trakcie rozpakowywania."],
            ["{{データを圧縮中}}", "Kompresja danych."],
            ["{{エンコード}}", "kodować"],
            ["{{外部ファイルの読み込み}}", "Ładowanie plików zewnętrznych"],
            ["{{バイナリデータを生成}}", "Generowanie danych binarnych."],
            ["{{データベースを起動}}", "Uruchomić bazę danych"],
            ["{{データを保存中}}", "Przechowywanie danych."],
            ["{{完了}}", "uzupełnienie"],
            ["{{ステージ左揃え}}", "wyrównanie do lewej sceny"],
            ["{{ステージ中央揃え(水平方向)}}", "Scena wyśrodkowana (pozioma)"],
            ["{{ステージ右揃え}}", "Ustawienie w prawo na scenie"],
            ["{{ステージ上揃え}}", "występ na scenie"],
            ["{{ステージ中央揃え(垂直方向)}}", "Scena wyśrodkowana (pionowa)"],
            ["{{ステージ下揃え}}", "uzasadnienie"],
            ["{{定規}}", "(pomiar) linijka"],
            ["{{表示}}", "wyświetlacz"],
            ["{{ショートカット}}", "skrót"],
            ["{{レイヤーを複製}}", "Powielanie warstwy"],
            ["{{未使用のフォルダを削除}}", "Usuń nieużywane foldery."],
            ["{{同名のアイテムが存在します}}", "Pozycja(y) o tej samej nazwie istnieje(ą)."],
            ["{{追加ファイル}}", "dodatkowy plik"],
            ["{{既存のコンテンツ}}", "Treść istniejąca."],
            ["{{上書きするか、ファイル名を変更して追加するか、スキップを選択する事ができます}}", "Możesz wybrać nadpisanie, zmianę nazwy i dodanie plików lub pominięcie"],
            ["{{全て上書き}}", "Nadpisz wszystkie"],
            ["{{全てスキップ}}", "Pomiń wszystkie."],
            ["{{追加・上書き}}", "Uzupełnienia i nadpisania"],
            ["{{スキップ}}", "pomiń"],
            ["{{表示確認したいフレームを指定}}", "Określ ramkę, której wyświetlanie chcesz sprawdzić."],
            ["{{ファイル名を指定}}", "Określenie nazwy pliku"],
            ["{{ファイル名}}", "nazwa pliku"],
            ["{{終了フレームを指定}}", "Określenie ramy końcowej"],
            ["{{開始フレームを指定}}", "Określenie ramki początkowej"],
            ["{{フレーム設定}}", "ustawienie ramy"],
            ["{{書き出し設定}}", "Ustawienia eksportu"],
            ["{{ファイル形式の選択}}", "Wybór formatu pliku"],
            ["{{ファイル形式}}", "format pliku"],
            ["{{サイズ設定}}", "Sizing"],
            ["{{左上}}", "lewy górny"],
            ["{{中央上}}", "środek-góra"],
            ["{{右上}}", "prawy górny"],
            ["{{中央左}}", "centrolewicowy"],
            ["{{中央}}", "centralny"],
            ["{{中央右}}", "centroprawica"],
            ["{{左下}}", "lewa dolna"],
            ["{{中央下}}", "niższy-średni (np. w klasie)"],
            ["{{右下}}", "prawy dolny"],
            ["{{中心点のX座標}}", "Współrzędna X punktu środkowego"],
            ["{{中心点のY座標}}", "Współrzędna Y punktu środkowego"],
            ["{{MovieClipに変換}}", "Konwertowanie do formatu MovieClip"],
            ["{{変換}}", "transformacja"],
            ["{{ループ回数}}", "Liczba pętli"],
            ["{{カーブポインターの削除}}", "Usuń wskaźnik krzywej."],
            ["{{ステージ基準}}", "Kryteria etapowe"],
            ["{{閉じる}}", "blisko (np. książka, oczy, spotkanie itp.)"],
            ["{{保存}}", "magazynowanie (zwykle cieczy, np. wody deszczowej, lub za zaporą)"],
            ["{{リセット}}", "resetowanie"],
            ["{{スクリーン}}", "ekran"],
            ["{{ショートカット設定}}", "Ustawienia skrótów"],
            ["{{レイヤーカラー}}", "kolor warstwowy (kolor)"],
            ["{{Next2Dを支援する}}", "Wspieraj Next2D."],
            ["{{サポート}}", "wsparcie"],
            ["{{未使用のアイテムを削除}}", "Usuń nieużywane elementy"],
            ["{{レイヤーをペースト}}", "Warstwa pasty."],
            ["{{レイヤーをコピー}}", "Kopiuj warstwę"],
            ["{{フレームをペースト}}", "Wklej ramkę."],
            ["{{フレームをコピー}}", "Kopia ramki."],
            ["{{キーフレームを削除}}", "Usuń klatki kluczowe."],
            ["{{キーフレームに空のキーフレームを追加できません}}", "Nie można dodać pustych klatek kluczowych do klatek kluczowych"],
            ["{{ズームツール}}", "Narzędzie powiększające"],
            ["{{タイムライン幅の拡大・縮小}}", "Rozszerzanie i zmniejszanie szerokości osi czasu"],
            ["{{ガイドレイヤー}}", "warstwa prowadząca"],
            ["{{音量設定}}", "Ustawienie głośności"],
            ["{{サウンドを削除}}", "Usuń dźwięk."],
            ["{{カスタムループ}}", "indywidualna pętla"],
            ["{{読込のみ}}", "Tylko do odczytu"],
            ["{{書込を許可}}", "zezwolenie na post"],
            ["{{単一行}}", "prosta linia"],
            ["{{複数行}}", "wielowierszowy (polecenie, np.)"],
            ["{{自動で折り返し}}", "Automatyczny zwrot"],
            ["{{左寄せ}}", "wyrównany do lewej"],
            ["{{中央揃え}}", "centrowanie"],
            ["{{右寄せ}}", "wyrównany do prawej"],
            ["{{放射状グラデーション}}", "gradacja promieniowa"],
            ["{{線形グラデーション}}", "gradient liniowy"],
            ["{{画像}}", "Obraz."],
            ["{{画像選択}}", "Wybór obrazu"],
            ["{{種別}}", "klasyfikacja"],
            ["{{Shapeの色設定}}", "Ustawienia kolorów kształtu"],
            ["{{変形}}", "deformacja"],
            ["{{カラー効果}}", "efekt kolorystyczny"],
            ["{{フィルター}}", "filtr (zwłaszcza do aparatu fotograficznego)"],
            ["{{Shapeを複製}}", "Duplikat kształtu."],
            ["{{読み込み}}", "wczytany"],
            ["{{新規フォルダー}}", "Nowy Folder"],
            ["{{新規MovieClip}}", "Nowy MovieClip."],
            ["{{枠に合わせてテキストをリサイズ}}", "Zmień rozmiar tekstu, aby dopasować go do ramki."],
            ["{{テキストに合わせて枠をリサイズ}}", "Zmień rozmiar ramki, aby dopasować ją do tekstu."],
            ["{{リサイズしない}}", "Brak zmiany rozmiaru"],
            ["{{フォント}}", "czcionka"],
            ["{{テキスト}}", "Tekst."],
            ["{{ループ}}", "pętla"],
            ["{{音量}}", "głośność (dźwięk)"],
            ["{{ビデオ}}", "Video."],
            ["{{イージング}}", "ułatwienie"],
            ["{{サウンド}}", "dźwięk"],
            ["{{シンボル}}", "symbol"],
            ["{{名前}}", "Nazwa."],
            ["{{オブジェクト}}", "obiekt"],
            ["{{ステージ設定}}", "Ustawienie sceny"],
            ["{{プレビュー}}", "podgląd"],
            ["{{削除}}", "usunięcie"],
            ["{{ペースト}}", "pasta"],
            ["{{コピー}}", "kopia"],
            ["{{プラグインメニュー}}", "Menu wtyczek"],
            ["{{トゥイーン}}", "między"],
            ["{{カーブポインターの追加}}", "Dodatkowy wskaźnik krzywizny."],
            ["{{パスの結合}}", "Łączenie ścieżek"],
            ["{{シェイプ}}", "kształt"],
            ["{{キーフレームに配分}}", "Przydział do klatek kluczowych"],
            ["{{レイヤーに配分}}", "Przydział do warstw"],
            ["{{タイムライン}}", "oś czasu"],
            ["{{整列}}", "wyrównanie"],
            ["{{最背面}}", "najnowszy"],
            ["{{ひとつ背面へ}}", "Jeden do tyłu."],
            ["{{ひとつ前面へ}}", "Jeden do przodu."],
            ["{{最前面}}", "przede wszystkim"],
            ["{{重ね順}}", "(rząd) superpozycji"],
            ["{{プラグイン}}", "wtyczka (oprogramowanie)"],
            ["{{ライブラリ}}", "biblioteka"],
            ["{{プロパティ}}", "nieruchomość"],
            ["{{マスクレイヤー}}", "warstwa maski"],
            ["{{通常レイヤー}}", "Warstwa normalna"],
            ["{{モーショントゥイーンの削除}}", "Usunięcie tweeterów ruchu."],
            ["{{モーショントゥイーンの追加}}", "Dodatkowy tweens ruchu."],
            ["{{モーダル表示}}", "wskazanie modalne"],
            ["{{言語}}", "Język."],
            ["{{フォーマット}}", "(komputer) format"],
            ["{{含める}}", "zawierać (niuans)"],
            ["{{含めない}}", "nie zawierać"],
            ["{{使い方、リファレンス}}", "Zastosowanie, odniesienie."],
            ["{{非表示レイヤー}}", "warstwa ukryta"],
            ["{{設定}}", "ustawienie (komputera lub pliku itp.)"],
            ["{{デフォルトのループを利用する}}", "Użyj domyślnej pętli."],
            ["{{フレームピッカー}}", "chwytak do ram"],
            ["{{左揃え}}", "lewe justowanie"],
            ["{{中央揃え(水平方向)}}", "Wyśrodkowany (poziomy)"],
            ["{{右揃え}}", "właściwe uzasadnienie"],
            ["{{上揃え}}", "uzasadnienie"],
            ["{{中央揃え(垂直方向)}}", "Wyśrodkowany (pionowy)"],
            ["{{下揃え}}", "uzasadnienie"],
            ["{{開始フレーム}}", "ramka początkowa"],
            ["{{終了フレーム}}", "rama końcowa"],
            ["{{ループで再生}}", "Odtwarzanie w pętli"],
            ["{{1回再生}}", "1 odtwarzanie"],
            ["{{指定したフレームで固定}}", "Stała w określonej ramce."],
            ["{{1回逆再生}}", "1 odtwarzanie wsteczne"],
            ["{{逆ループで再生}}", "Odtwarzanie w pętli wstecznej."],
            ["{{画面の拡大・縮小}}", "Przybliżanie i oddalanie ekranu"],
            ["{{カスタムイージングデータを保存}}", "Zapisz niestandardowe dane easingowe."],
            ["{{カスタムイージングデータの読込}}", "Odczyt niestandardowych danych dotyczących luzowania."],
            ["{{プレビューのON/OFF}}", "Włączenie/wyłączenie podglądu."],
            ["{{フォント枠サイズ}}", "wielkość ramki czcionki"],
            ["{{フォント枠カラー}}", "Kolor ramki czcionki"],
            ["{{オニオンスキン}}", "cebulka"],
            ["{{バケツツール}}", "Narzędzia z łyżką"],
            ["{{ペンツール}}", "narzędzie piórkowe"],
            ["{{ダブルクリックでカーブポイントが追加されます}}", "Kliknij dwukrotnie, aby dodać punkt krzywej"],
            ["{{選択ツール}}", "narzędzie wyboru"],
            ["{{Shape変形ツール}}", "Narzędzia do deformacji kształtu"],
            ["{{テキストツール}}", "narzędzie tekstowe"],
            ["{{矩形ツール}}", "Narzędzie Prostokąt"],
            ["{{楕円ツール}}", "Narzędzia eliptyczne"],
            ["{{角丸矩形ツール}}", "Narzędzie prostokąt o zaokrąglonym rogu"],
            ["{{塗りのカラー}}", "Kolor farby"],
            ["{{線のカラー}}", "Kolor linii"],
            ["{{線の太さ}}", "grubość linii"],
            ["{{プロジェクトデータの読込}}", "Odczytywanie danych projektowych"],
            ["{{プロジェクトデータを保存}}", "Zapisz dane projektu."],
            ["{{書き出し}}", "zdanie wstępne lub akapit"],
            ["{{Discordへ移動}}", "Idź do Discorda"],
            ["{{バグ報告}}", "raport o błędzie"],
            ["{{設定}}", "ustawienie (komputera lub pliku itp.)"],
            ["{{タブを追加}}", "Dodaj zakładkę."],
            ["{{タブの一覧を表示・移動}}", "Wyświetlanie i przesuwanie listy kart"],
            ["{{スクリプトを追加}}", "Dodaj scenariusz."],
            ["{{キーフレームを追加}}", "Dodaj klatki kluczowe."],
            ["{{空のキーフレームを追加}}", "Dodaj puste klatki kluczowe."],
            ["{{フレームを追加}}", "Dodaj ramkę."],
            ["{{フレームを削除}}", "Zdjąć ramę."],
            ["{{再生}}", "regeneracja"],
            ["{{停止}}", "zawieszenie muzyki, tańca itp. na znak żałoby"],
            ["{{ループ設定}}", "Ustawienia pętli"],
            ["{{レイヤーを追加}}", "Dodaj warstwę."],
            ["{{レイヤーを削除}}", "Usuń warstwę."],
            ["{{全てのレイヤーをハイライト}}", "Podświetlić wszystkie warstwy"],
            ["{{全てのレイヤーを非表示}}", "Ukryj wszystkie warstwy"],
            ["{{全てのレイヤーをロック}}", "Zablokuj wszystkie warstwy."],
            ["{{比率を固定}}", "Stały wskaźnik"],
            ["{{ステージの幅}}", "Szerokość sceny"],
            ["{{背景色}}", "kolor tła"],
            ["{{ステージの高さ}}", "Wysokość sceny."],
            ["{{フレームレート}}", "częstotliwość odświeżania"],
            ["{{シンボル名}}", "nazwa symbolu"],
            ["{{イージング設定}}", "Ustawienie łagodzące"],
            ["{{ビデオの音量設定}}", "Ustawienia głośności wideo"],
            ["{{自動再生}}", "autoplay"],
            ["{{テキストエリアのボーダー設定}}", "Ustawienia obramowania dla obszarów tekstowych."],
            ["{{テキスト入力設定}}", "ustawienie wprowadzania tekstu"],
            ["{{フォント選択}}", "Wybór czcionki"],
            ["{{自動サイズ調整}}", "Automatyczna zmiana rozmiaru"],
            ["{{フォントスタイルタイプ}}", "styl czcionki typ"],
            ["{{行揃え}}", "uzasadnić"],
            ["{{改行設定}}", "ustawienie łamania linii"],
            ["{{スクロール設定}}", "Ustawienia przewijania"],
            ["{{フォントサイズ}}", "rozmiar czcionki"],
            ["{{フォントカラー}}", "kolor czcionki"],
            ["{{行間}}", "między wierszami"],
            ["{{文字幅}}", "szerokość znaków"],
            ["{{左マージン}}", "lewy margines"],
            ["{{右マージン}}", "prawy margines"],
            ["{{カラー種別の選択}}", "Wybierz typ koloru"],
            ["{{背景画像の選択}}", "Wybieranie obrazu tła"],
            ["{{カラーポインターを追加}}", "Dodatkowy wskaźnik koloru."],
            ["{{カラー値}}", "wartość koloru"],
            ["{{アルファ(0%-100%)}}", "Alfa (0%-100%)"],
            ["{{アルファ値}}", "wartość alfa"],
            ["{{選択対象の幅}}", "Szerokość celu selekcji"],
            ["{{選択対象のX座標}}", "Współrzędna X celu selekcji"],
            ["{{選択対象の高さ}}", "Wysokość celu selekcji"],
            ["{{選択対象のY座標}}", "Współrzędna Y celu selekcji"],
            ["{{選択対象の幅の伸縮}}", "Rozciąganie i zmniejszanie szerokości celu selekcji"],
            ["{{選択対象を回転}}", "Obróć wybór"],
            ["{{選択対象の高さの伸縮}}", "Rozszerzanie i kurczenie się wysokości celu selekcji."],
            ["{{アルファオフセット(-255〜255)}}", "Przesunięcie alfa (-255 do 255)"],
            ["{{赤(0%-100%)}}", "Czerwony (0%-100%)"],
            ["{{赤オフセット(-255〜255)}}", "Przesunięcie czerwieni (-255 do 255)"],
            ["{{緑(0%-100%)}}", "Zielony (0%-100%)"],
            ["{{緑オフセット(-255〜255)}}", "Offset koloru zielonego (-255 do 255)"],
            ["{{青(0%-100%)}}", "Niebieski (0%-100%)"],
            ["{{青オフセット(-255〜255)}}", "Przesunięcie koloru niebieskiego (-255 do 255)"],
            ["{{ブレンドモード}}", "tryb mieszania"],
            ["{{フィルターを選択}}", "Wybierz filtr"],
            ["{{フィルターを追加}}", "Dodaj filtr."],
            ["{{サウンドを追加}}", "Dodaj dźwięk."],
            ["{{フィルターを表示・非表示する}}", "Pokaż/ukryj filtry"],
            ["{{フィルターを削除}}", "Usuń filtry."],
            ["{{水平方向にぼかす}}", "Rozmycie w poziomie."],
            ["{{垂直方向にぼかす}}", "Rozmycie pionowe."],
            ["{{フィルター強度}}", "Wytrzymałość filtra"],
            ["{{フィルター角度}}", "Kąt nachylenia filtra"],
            ["{{シャドウのアルファ}}", "Shadow's Alpha."],
            ["{{シャドウのカラー}}", "Kolory cieni."],
            ["{{フィルター距離}}", "Odległość między filtrami"],
            ["{{ハイライトのカラー}}", "Podkreślenia kolorów"],
            ["{{ハイライトのアルファ}}", "Highlight Alpha."],
            ["{{グラデーションカラー}}", "kolor gradacji"],
            ["{{グラデーションのアルファ}}", "Alfa gradientu"],
            ["{{タブの移動・名前を変更}}", "Przenoszenie i zmiana nazw kart"],
            ["{{プロジェクトを閉じる}}", "Zamknij projekt"],
            ["{{上下に移動}}", "Przesuń w górę i w dół"],
            ["{{レイヤー変更(ダブルクリック)}}", "Zmiana warstwy (podwójne kliknięcie)"],
            ["{{レイヤーをハイライト}}", "Warstwy Highlight."],
            ["{{レイヤーを非表示}}", "Ukryj warstwy."],
            ["{{レイヤーをロック}}", "Warstwy zamka."],
            ["{{カーブポインター(ダブルクリックでON/OFF)}}", "Wskaźnik krzywej (podwójne kliknięcie włącza/wyłącza)"],
            ["{{インスタンス名}}", "nazwa instancji"],
            ["{{ライブラリ内の検索}}", "Wyszukiwanie w bibliotece"],
            ["{{フレームラベル}}", "etykieta ramowa"],
            ["{{プロジェクトが保存されていない場合、このタブのプロジェクトデータを復旧する事はできません。タブを削除しますか？}}}}", "Jeśli projekt nie zostanie zapisany, nie można odzyskać danych projektu dla tej zakładki. Czy chcesz usunąć tę kartę?}}"]
        ]);
    }
}
