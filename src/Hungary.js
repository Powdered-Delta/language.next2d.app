/**
 * @class
 * @extends Language
 */
class Hungary extends Language
{
    /**
     * @return {Map}
     * @method
     * @public
     */
    createMapping ()
    {
        return new Map([
            ["{{前のキーフレームと座標を合わせる}}", "Koordináták igazítása az előző kulcskockához"],
            ["{{前のキーフレームと変形を合わせる}}", "Deformáció igazítása az előző kulcskockához"],
            ["{{次のキーフレームに移動}}", "Következő kulcskockára lépés"],
            ["{{前のキーフレームに移動}}", "Előző kulcskockára lép"],
            ["{{全てのスクリプトをコピー}}", "Minden szkript másolása"],
            ["{{スクリプトをコピー}}", "Szkript másolása"],
            ["{{スクリプトをペースト}}", "Szkript beillesztése"],
            ["{{全てのラベルをコピー}}", "Minden címke másolása"],
            ["{{ラベルをコピー}}", "Címkék másolása"],
            ["{{ラベルをペースト}}", "Címkék beillesztése"],
            ["{{全てのサウンドをコピー}}", "Minden hang másolása"],
            ["{{サウンドをコピー}}", "Hang másolása"],
            ["{{サウンドをペースト}}", "Hang beillesztése"],
            ["{{書き出し先の選択}}", "Az exportálási célállomás kiválasztása"],
            ["{{画質}}", "képminőség"],
            ["{{座標}}", "koordináta"],
            ["{{MovieClipを編集}}", "MovieClip szerkesztése."],
            ["{{親の階層へ移動}}", "Mozgás a szülői hierarchiába"],
            ["{{ロックされたレイヤーです}}", "Zárolt réteg."],
            ["{{トゥイーンには複数のオブジェクトを設置できません}}", "Több objektum nem helyezhető egy tweenre."],
            ["{{名前が重複しています}}", "Duplikált nevek."],
            ["{{名前は必須です}}", "Szükséges név."],
            ["{{基準点}}", "referenciapont"],
            ["{{自由変形ツール}}", "Ingyenes transzformációs eszköz"],
            ["{{キーフレームに変換}}", "Kulcskockákká konvertálva"],
            ["{{空のキーフレームに変換}}", "Üres kulcskockákká alakítva."],
            ["{{最初のフレームに移動}}", "Menj az első képkockára"],
            ["{{最後のフレームに移動}}", "Menj az utolsó képkockára"],
            ["{{SWFを解析中}}", "SWF elemzése."],
            ["{{JSONを生成}}", "JSON generálása"],
            ["{{ファイルを生成}}", "Fájl generálása"],
            ["{{N2Dファイルの読み込み}}", "N2D fájlok betöltése."],
            ["{{JSONの読み込み}}", "JSON olvasása."],
            ["{{データを解凍中}}", "Az adatok kicsomagolása."],
            ["{{データを圧縮中}}", "Adatok tömörítése."],
            ["{{エンコード}}", "kódolás"],
            ["{{外部ファイルの読み込み}}", "Külső fájlok betöltése"],
            ["{{バイナリデータを生成}}", "Bináris adatok generálása."],
            ["{{データベースを起動}}", "Adatbázis indítása"],
            ["{{データを保存中}}", "Adatok tárolása."],
            ["{{完了}}", "befejezés"],
            ["{{ステージ左揃え}}", "színpad balra igazítás"],
            ["{{ステージ中央揃え(水平方向)}}", "Színpadközéppontú (vízszintes)"],
            ["{{ステージ右揃え}}", "Színpad jobbra igazítása"],
            ["{{ステージ上揃え}}", "színpadi fellépés"],
            ["{{ステージ中央揃え(垂直方向)}}", "Színpadközéppontú (függőleges)"],
            ["{{ステージ下揃え}}", "indoklás"],
            ["{{定規}}", "vonalzó"],
            ["{{表示}}", "megjelenítés"],
            ["{{ショートカット}}", "rövidítés"],
            ["{{レイヤーを複製}}", "Duplikált réteg"],
            ["{{未使用のフォルダを削除}}", "Törölje a nem használt mappákat."],
            ["{{同名のアイテムが存在します}}", "Léteznek azonos nevű tétel"],
            ["{{追加ファイル}}", "további fájl"],
            ["{{既存のコンテンツ}}", "Meglévő tartalom."],
            ["{{上書きするか、ファイル名を変更して追加するか、キャンセルを選択する事ができます}}", "Kiválaszthatja a fájlok felülírását, átnevezését és hozzáadását vagy törlését."],
            ["{{全て上書き}}", "Az összes felülírása"],
            ["{{全てキャンセル}}", "Törölje az összes"],
            ["{{追加・上書き}}", "Hozzáadások és felülírások"],
            ["{{キャンセル}}", "Mégsem"],
            ["{{表示確認したいフレームを指定}}", "Adja meg a keretet, amelynek kijelzését ellenőrizni kívánja."],
            ["{{ファイル名を指定}}", "Fájlnév megadása"],
            ["{{ファイル名}}", "fájlnév"],
            ["{{終了フレームを指定}}", "Adja meg a végkeretet"],
            ["{{開始フレームを指定}}", "A kezdőkeret megadása"],
            ["{{フレーム設定}}", "keret beállítása"],
            ["{{書き出し設定}}", "Exportálási beállítások"],
            ["{{ファイル形式の選択}}", "A fájlformátum kiválasztása"],
            ["{{ファイル形式}}", "fájlformátum"],
            ["{{サイズ設定}}", "Méretezés"],
            ["{{左上}}", "bal-felül"],
            ["{{中央上}}", "középső-felső"],
            ["{{右上}}", "jobb felső"],
            ["{{中央左}}", "balközép"],
            ["{{中央}}", "központi"],
            ["{{中央右}}", "jobbközép"],
            ["{{左下}}", "balra lent"],
            ["{{中央下}}", "alsó-közép"],
            ["{{右下}}", "jobb alsó"],
            ["{{中心点のX座標}}", "A középpont X-koordinátája"],
            ["{{中心点のY座標}}", "A középpont Y-koordinátája"],
            ["{{MovieClipに変換}}", "Átalakítás MovieClip-be"],
            ["{{変換}}", "átalakulás"],
            ["{{ループ回数}}", "Hurokszám"],
            ["{{カーブポインターの削除}}", "Görbe mutató törlése."],
            ["{{ステージ基準}}", "Szakasz kritériumai"],
            ["{{閉じる}}", "közel"],
            ["{{保存}}", "tárolás"],
            ["{{リセット}}", "reset"],
            ["{{スクリーン}}", "képernyő"],
            ["{{ショートカット設定}}", "Shortcut beállítások"],
            ["{{レイヤーカラー}}", "réteges szín"],
            ["{{Next2Dを支援する}}", "Next2D támogatás."],
            ["{{サポート}}", "támogatás"],
            ["{{未使用のアイテムを削除}}", "A nem használt elemek eltávolítása"],
            ["{{レイヤーをペースト}}", "Paszta réteg."],
            ["{{レイヤーをコピー}}", "Réteg másolása"],
            ["{{フレームをペースト}}", "Beillesztési keret."],
            ["{{フレームをコピー}}", "Keret másolása."],
            ["{{キーフレームを削除}}", "Kulcskockák törlése."],
            ["{{キーフレームに空のキーフレームを追加できません}}", "Nem lehet üres kulcskockákat hozzáadni a kulcskockákhoz"],
            ["{{ズームツール}}", "Zoom eszköz"],
            ["{{タイムライン幅の拡大・縮小}}", "Az idővonal szélességének bővítése és csökkentése"],
            ["{{ガイドレイヤー}}", "vezető réteg"],
            ["{{音量設定}}", "Hangerő beállítása"],
            ["{{サウンドを削除}}", "Hang eltávolítása."],
            ["{{カスタムループ}}", "testreszabott hurok"],
            ["{{読込のみ}}", "Csak olvasás"],
            ["{{書込を許可}}", "postai engedély"],
            ["{{単一行}}", "egyszerű vonal"],
            ["{{複数行}}", "többsoros"],
            ["{{自動で折り返し}}", "Automatikus fordulat"],
            ["{{左寄せ}}", "balra igazított"],
            ["{{中央揃え}}", "centrírozás"],
            ["{{右寄せ}}", "jobbra igazított"],
            ["{{放射状グラデーション}}", "radiális gradáció"],
            ["{{線形グラデーション}}", "lineáris gradiens"],
            ["{{画像}}", "Kép."],
            ["{{画像選択}}", "Kép kiválasztása"],
            ["{{種別}}", "osztályozás"],
            ["{{Shapeの色設定}}", "Alak színbeállítások"],
            ["{{変形}}", "deformáció"],
            ["{{カラー効果}}", "színhatás"],
            ["{{フィルター}}", "szűrő"],
            ["{{Shapeを複製}}", "Duplikált alakzat."],
            ["{{読み込み}}", "beolvasni"],
            ["{{新規フォルダー}}", "Új mappa"],
            ["{{新規MovieClip}}", "Új MovieClip."],
            ["{{枠に合わせてテキストをリサイズ}}", "A szöveg méretének módosítása a keretbe való illesztéshez."],
            ["{{テキストに合わせて枠をリサイズ}}", "Méretezze át a keretet a szöveghez illeszkedőre."],
            ["{{リサイズしない}}", "Nincs átméretezés"],
            ["{{フォント}}", "betűtípus"],
            ["{{テキスト}}", "Szöveg."],
            ["{{ループ}}", "loop"],
            ["{{音量}}", "hangerő"],
            ["{{ビデオ}}", "Videó."],
            ["{{イージング}}", "enyhítés"],
            ["{{サウンド}}", "hang"],
            ["{{シンボル}}", "szimbólum"],
            ["{{名前}}", "Név."],
            ["{{オブジェクト}}", "objektum"],
            ["{{ステージ設定}}", "Színpadkép"],
            ["{{プレビュー}}", "előnézet"],
            ["{{削除}}", "törlés"],
            ["{{ペースト}}", "paste"],
            ["{{コピー}}", "másolat"],
            ["{{プラグインメニュー}}", "Plug-in menü"],
            ["{{トゥイーン}}", "tween"],
            ["{{カーブポインターの追加}}", "További görbe mutató."],
            ["{{パスの結合}}", "Útvonal összevonása"],
            ["{{シェイプ}}", "shape"],
            ["{{キーフレームに配分}}", "Hozzárendelés a kulcskockákhoz"],
            ["{{レイヤーに配分}}", "Hozzárendelés a rétegekhez"],
            ["{{タイムライン}}", "idővonal"],
            ["{{整列}}", "igazítás"],
            ["{{最背面}}", "legfrissebb"],
            ["{{ひとつ背面へ}}", "Az egyik hátul."],
            ["{{ひとつ前面へ}}", "Egyet előre."],
            ["{{最前面}}", "legfontosabb"],
            ["{{重ね順}}", "szuperpozíció"],
            ["{{プラグイン}}", "plug-in"],
            ["{{ライブラリ}}", "könyvtár"],
            ["{{プロパティ}}", "ingatlan"],
            ["{{マスクレイヤー}}", "maszk réteg"],
            ["{{通常レイヤー}}", "Normál réteg"],
            ["{{モーショントゥイーンの削除}}", "Mozgótweens törlése."],
            ["{{モーショントゥイーンの追加}}", "További mozgás tweens."],
            ["{{モーダル表示}}", "modális jelzés"],
            ["{{言語}}", "Nyelv."],
            ["{{フォーマット}}", "formátum"],
            ["{{含める}}", "include"],
            ["{{含めない}}", "nem tartalmazza"],
            ["{{使い方、リファレンス}}", "Használat, hivatkozás."],
            ["{{非表示レイヤー}}", "rejtett réteg"],
            ["{{設定}}", "beállítás"],
            ["{{デフォルトのループを利用する}}", "Használja az alapértelmezett hurkot."],
            ["{{フレームピッカー}}", "keretválasztó"],
            ["{{左揃え}}", "bal oldali igazítás"],
            ["{{中央揃え(水平方向)}}", "Középre állítva (vízszintes)"],
            ["{{右揃え}}", "megfelelő indoklás"],
            ["{{上揃え}}", "indoklás"],
            ["{{中央揃え(垂直方向)}}", "Középre állítva (függőlegesen)"],
            ["{{下揃え}}", "indoklás"],
            ["{{開始フレーム}}", "kezdőkeret"],
            ["{{終了フレーム}}", "végkeret"],
            ["{{ループで再生}}", "Lejátszás hurokban"],
            ["{{1回再生}}", "1 lejátszás"],
            ["{{指定したフレームで固定}}", "A megadott keretben rögzítve."],
            ["{{1回逆再生}}", "1 fordított lejátszás"],
            ["{{逆ループで再生}}", "Visszafordított hurokban történő lejátszás."],
            ["{{画面の拡大・縮小}}", "A képernyő nagyítása és kicsinyítése"],
            ["{{カスタムイージングデータを保存}}", "Egyéni enyhítési adatok mentése."],
            ["{{カスタムイージングデータの読込}}", "Egyéni enyhítési adatok olvasása."],
            ["{{プレビューのON/OFF}}", "Előnézet be/ki."],
            ["{{フォント枠サイズ}}", "betűtípus keretméret"],
            ["{{フォント枠カラー}}", "Betűkeret színe"],
            ["{{オニオンスキン}}", "hagymahéj"],
            ["{{バケツツール}}", "Vödrös szerszámok"],
            ["{{ペンツール}}", "tollszerszám"],
            ["{{ダブルクリックでカーブポイントが追加されます}}", "Dupla kattintás görbepont hozzáadásához"],
            ["{{選択ツール}}", "kiválasztó eszköz"],
            ["{{Shape変形ツール}}", "Alakdeformáló eszközök"],
            ["{{テキストツール}}", "szöveges eszköz"],
            ["{{矩形ツール}}", "Téglalap eszköz"],
            ["{{楕円ツール}}", "Elliptikus eszközök"],
            ["{{角丸矩形ツール}}", "Lekerekített sarok téglalap eszköz"],
            ["{{塗りのカラー}}", "A festék színe"],
            ["{{線のカラー}}", "Vonal színe"],
            ["{{線の太さ}}", "vonalvastagság"],
            ["{{プロジェクトデータの読込}}", "Projektadatok olvasása"],
            ["{{プロジェクトデータを保存}}", "Projektadatok mentése."],
            ["{{書き出し}}", "nyitó mondat vagy bekezdés"],
            ["{{Discordへ移動}}", "Menj a Discordra"],
            ["{{バグ報告}}", "hibajelentés"],
            ["{{設定}}", "beállítás (egy számítógép vagy fájl stb.)"],
            ["{{タブを追加}}", "Hozzáadás lap."],
            ["{{タブの一覧を表示・移動}}", "A lapok listájának megjelenítése és mozgatása"],
            ["{{スクリプトを追加}}", "Szkript hozzáadása."],
            ["{{キーフレームを追加}}", "Kulcskockák hozzáadása."],
            ["{{空のキーフレームを追加}}", "Üres kulcskockák hozzáadása."],
            ["{{フレームを追加}}", "Keret hozzáadása."],
            ["{{フレームを削除}}", "Távolítsa el a keretet."],
            ["{{再生}}", "regeneráció"],
            ["{{停止}}", "a zene, a tánc stb. felfüggesztése a gyász jeleként"],
            ["{{ループ設定}}", "Hurok beállítások"],
            ["{{レイヤーを追加}}", "Réteg hozzáadása."],
            ["{{レイヤーを削除}}", "Réteg törlése."],
            ["{{全てのレイヤーをハイライト}}", "Minden réteg kiemelése"],
            ["{{全てのレイヤーを非表示}}", "Minden réteg elrejtése"],
            ["{{全てのレイヤーをロック}}", "Zárja le az összes réteget."],
            ["{{比率を固定}}", "Fix arány"],
            ["{{ステージの幅}}", "Színpad szélessége"],
            ["{{背景色}}", "háttérszín"],
            ["{{ステージの高さ}}", "Színpadmagasság."],
            ["{{フレームレート}}", "képkocka sebesség"],
            ["{{シンボル名}}", "szimbólum neve"],
            ["{{イージング設定}}", "Enyhítő beállítás"],
            ["{{ビデオの音量設定}}", "Videó hangerő beállítások"],
            ["{{自動再生}}", "automatikus lejátszás"],
            ["{{テキストエリアのボーダー設定}}", "Szövegterületek keretbeállításai."],
            ["{{テキスト入力設定}}", "szövegbeviteli beállítás"],
            ["{{フォント選択}}", "Betűtípus kiválasztása"],
            ["{{自動サイズ調整}}", "Automatikus átméretezés"],
            ["{{フォントスタイルタイプ}}", "betűtípus stílus típusa"],
            ["{{行揃え}}", "igazolja a"],
            ["{{改行設定}}", "sortörés beállítása"],
            ["{{スクロール設定}}", "Görgetési beállítások"],
            ["{{フォントサイズ}}", "betűméret"],
            ["{{フォントカラー}}", "betűszín"],
            ["{{行間}}", "a sorok között"],
            ["{{文字幅}}", "karakterszélesség"],
            ["{{左マージン}}", "bal oldali margó"],
            ["{{右マージン}}", "jobb oldali margó"],
            ["{{カラー種別の選択}}", "Színtípus kiválasztása"],
            ["{{背景画像の選択}}", "Háttérkép kiválasztása"],
            ["{{カラーポインターを追加}}", "További színes mutató."],
            ["{{カラー値}}", "színérték"],
            ["{{アルファ(0%-100%)}}", "Alfa (0%-100%)"],
            ["{{アルファ値}}", "alfa-érték"],
            ["{{選択対象の幅}}", "A kiválasztási cél szélessége"],
            ["{{選択対象のX座標}}", "A kiválasztási cél X-koordinátája"],
            ["{{選択対象の高さ}}", "A kiválasztási célpont magassága"],
            ["{{選択対象のY座標}}", "A kiválasztási cél Y-koordinátája"],
            ["{{選択対象の幅の伸縮}}", "A kiválasztási célpont szélességének nyújtása és szűkítése"],
            ["{{選択対象を回転}}", "Forgassa a kiválasztást"],
            ["{{選択対象の高さの伸縮}}", "A kiválasztási célpont magasságának meghosszabbítása és összehúzása."],
            ["{{アルファオフセット(-255〜255)}}", "Alfa eltolás (-255 és 255 között)"],
            ["{{赤(0%-100%)}}", "Piros (0%-100%)"],
            ["{{赤オフセット(-255〜255)}}", "Vörös offset (-255 és 255 között)"],
            ["{{緑(0%-100%)}}", "Zöld (0%-100%)"],
            ["{{緑オフセット(-255〜255)}}", "Zöld offset (-255 és 255 között)"],
            ["{{青(0%-100%)}}", "Kék (0%-100%)"],
            ["{{青オフセット(-255〜255)}}", "Kék eltolás (-255 és 255 között)"],
            ["{{ブレンドモード}}", "keverési mód"],
            ["{{フィルターを選択}}", "Szűrő kiválasztása"],
            ["{{フィルターを追加}}", "Szűrő hozzáadása."],
            ["{{サウンドを追加}}", "Hang hozzáadása."],
            ["{{フィルターを表示・非表示する}}", "Szűrők megjelenítése/elrejtése"],
            ["{{フィルターを削除}}", "Szűrők eltávolítása."],
            ["{{水平方向にぼかす}}", "Elmosódás vízszintesen."],
            ["{{垂直方向にぼかす}}", "Függőleges elmosódás."],
            ["{{フィルター強度}}", "Szűrőerősség"],
            ["{{フィルター角度}}", "Szűrő szöge"],
            ["{{シャドウのアルファ}}", "Shadow alfája."],
            ["{{シャドウのカラー}}", "Árnyékszínek."],
            ["{{フィルター距離}}", "Szűrő távolság"],
            ["{{ハイライトのカラー}}", "Színes kiemelések"],
            ["{{ハイライトのアルファ}}", "Alfa kiemelése."],
            ["{{グラデーションカラー}}", "gradáció színe"],
            ["{{グラデーションのアルファ}}", "A gradiens alfája"],
            ["{{タブの移動・名前を変更}}", "Lapok áthelyezése és átnevezése"],
            ["{{プロジェクトを閉じる}}", "Projekt lezárása"],
            ["{{上下に移動}}", "Mozgás fel és le"],
            ["{{レイヤー変更(ダブルクリック)}}", "Rétegváltás (dupla kattintás)"],
            ["{{レイヤーをハイライト}}", "Kiemelő rétegek."],
            ["{{レイヤーを非表示}}", "Rétegek elrejtése."],
            ["{{レイヤーをロック}}", "Rétegek lezárása."],
            ["{{カーブポインター(ダブルクリックでON/OFF)}}", "Görbe mutató (dupla kattintás a be/ki kapcsoláshoz)"],
            ["{{インスタンス名}}", "példa neve"],
            ["{{ライブラリ内の検索}}", "Keresés a könyvtárban"],
            ["{{フレームラベル}}", "keretcímke"],
            ["{{プロジェクトが保存されていない場合、このタブのプロジェクトデータを復旧する事はできません。タブを削除しますか？}}}}", "Ha a projekt nem kerül mentésre, az adott lap projektadatai nem állíthatók helyre. Szeretné törölni a lapot?}}"]
        ]);
    }
}
