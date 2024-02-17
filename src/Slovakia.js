/**
 * @class
 * @extends Language
 */
class Slovakia extends Language
{
    /**
     * @return {Map}
     * @method
     * @public
     */
    createMapping ()
    {
        return new Map([
            ["{{前のキーフレームと座標を合わせる}}", "Zarovnanie súradníc s predchádzajúcim kľúčovým snímkom"],
            ["{{前のキーフレームと変形を合わせる}}", "Zarovnanie deformácie s predchádzajúcim kľúčovým snímkom"],
            ["{{次のキーフレームに移動}}", "Prechod na ďalší kľúčový snímok"],
            ["{{前のキーフレームに移動}}", "Prejsť na predchádzajúci kľúčový snímok"],
            ["{{全てのスクリプトをコピー}}", "Skopírujte všetky skripty"],
            ["{{スクリプトをコピー}}", "Kopírovať skript"],
            ["{{スクリプトをペースト}}", "Vložiť skript"],
            ["{{全てのラベルをコピー}}", "Skopírovať všetky štítky"],
            ["{{ラベルをコピー}}", "Kopírovať štítky"],
            ["{{ラベルをペースト}}", "Vložiť štítky"],
            ["{{全てのサウンドをコピー}}", "Kopírovať všetky zvuky"],
            ["{{サウンドをコピー}}", "Kopírovať zvuk"],
            ["{{サウンドをペースト}}", "Vložiť zvuk"],
            ["{{書き出し先の選択}}", "Výber cieľa exportu"],
            ["{{画質}}", "kvalita obrazu"],
            ["{{座標}}", "súradnice"],
            ["{{MovieClipを編集}}", "Upraviť filmový klip."],
            ["{{親の階層へ移動}}", "Presun do nadradenej hierarchie"],
            ["{{ロックされたレイヤーです}}", "Uzamknutá vrstva."],
            ["{{トゥイーンには複数のオブジェクトを設置できません}}", "Na tween nie je možné umiestniť viacero objektov."],
            ["{{名前が重複しています}}", "Duplicitné názvy."],
            ["{{名前は必須です}}", "Požadované meno."],
            ["{{基準点}}", "referenčný bod"],
            ["{{自由変形ツール}}", "Bezplatný nástroj na transformáciu"],
            ["{{キーフレームに変換}}", "Prevedené na kľúčové snímky"],
            ["{{空のキーフレームに変換}}", "Prevedené na prázdne kľúčové snímky."],
            ["{{最初のフレームに移動}}", "Prejsť na prvý snímok"],
            ["{{最後のフレームに移動}}", "Prejdite na poslednú snímku."],
            ["{{SWFを解析中}}", "Analyzované SWF."],
            ["{{JSONを生成}}", "Generovanie JSON"],
            ["{{ファイルを生成}}", "Generovanie súboru"],
            ["{{N2Dファイルの読み込み}}", "Načítanie súborov N2D."],
            ["{{JSONの読み込み}}", "Čítanie JSON."],
            ["{{データを解凍中}}", "Rozbaľovanie údajov."],
            ["{{データを圧縮中}}", "Kompresia údajov."],
            ["{{エンコード}}", "kódovanie"],
            ["{{外部ファイルの読み込み}}", "Načítanie externých súborov"],
            ["{{バイナリデータを生成}}", "Generovanie binárnych údajov."],
            ["{{データベースを起動}}", "Spustenie databázy"],
            ["{{データを保存中}}", "Ukladanie údajov."],
            ["{{完了}}", "dokončenie"],
            ["{{ステージ左揃え}}", "zarovnanie doľava"],
            ["{{ステージ中央揃え(水平方向)}}", "Fáza vycentrovaná (horizontálne)"],
            ["{{ステージ右揃え}}", "Zarovnanie vpravo na javisku"],
            ["{{ステージ上揃え}}", "vystúpenie na javisku"],
            ["{{ステージ中央揃え(垂直方向)}}", "Fáza vycentrovaná (vertikálna)"],
            ["{{ステージ下揃え}}", "odôvodnenie"],
            ["{{定規}}", "pravítko"],
            ["{{表示}}", "zobrazenie"],
            ["{{ショートカット}}", "skratka"],
            ["{{レイヤーを複製}}", "Duplikovanie vrstvy"],
            ["{{未使用のフォルダを削除}}", "Odstránenie nepoužívaných priečinkov."],
            ["{{同名のアイテムが存在します}}", "Existujú položky s rovnakým názvom."],
            ["{{追加ファイル}}", "ďalší súbor"],
            ["{{既存のコンテンツ}}", "Existujúci obsah."],
            ["{{上書きするか、ファイル名を変更して追加するか、キャンセルを選択する事ができます}}", "Môžete si vybrať, či chcete prepísať, premenovať a pridať súbory alebo zrušiť"],
            ["{{全て上書き}}", "Prepísať všetky"],
            ["{{全てキャンセル}}", "Zrušiť všetky"],
            ["{{追加・上書き}}", "Pridávanie a prepisovanie"],
            ["{{キャンセル}}", "Zrušiť"],
            ["{{表示確認したいフレームを指定}}", "Zadajte rám, ktorého zobrazenie chcete skontrolovať."],
            ["{{ファイル名を指定}}", "Zadajte názov súboru"],
            ["{{ファイル名}}", "názov súboru"],
            ["{{終了フレームを指定}}", "Zadajte koncový rám"],
            ["{{開始フレームを指定}}", "Zadajte počiatočný rámec"],
            ["{{フレーム設定}}", "nastavenie rámu"],
            ["{{書き出し設定}}", "Nastavenia exportu"],
            ["{{ファイル形式の選択}}", "Výber formátu súboru"],
            ["{{ファイル形式}}", "formát súboru"],
            ["{{サイズ設定}}", "Dimenzovanie"],
            ["{{左上}}", "vľavo hore"],
            ["{{中央上}}", "stred-horná časť"],
            ["{{右上}}", "vpravo hore"],
            ["{{中央左}}", "ľavý stred"],
            ["{{中央}}", "centrálna"],
            ["{{中央右}}", "Pravý stred"],
            ["{{左下}}", "vľavo dole"],
            ["{{中央下}}", "nižšia stredná"],
            ["{{右下}}", "pravá dolná časť"],
            ["{{中心点のX座標}}", "X-ová súradnica stredového bodu"],
            ["{{中心点のY座標}}", "Y-ová súradnica stredového bodu"],
            ["{{MovieClipに変換}}", "Konvertovať do MovieClip"],
            ["{{変換}}", "transformácia"],
            ["{{ループ回数}}", "Počet slučiek"],
            ["{{カーブポインターの削除}}", "Odstránenie ukazovateľa krivky."],
            ["{{ステージ基準}}", "Kritériá etapy"],
            ["{{閉じる}}", "blízko"],
            ["{{保存}}", "skladovanie"],
            ["{{リセット}}", "resetovanie"],
            ["{{スクリーン}}", "obrazovka"],
            ["{{ショートカット設定}}", "Nastavenia skratiek"],
            ["{{レイヤーカラー}}", "vrstvená farba"],
            ["{{Next2Dを支援する}}", "Podpora Next2D."],
            ["{{サポート}}", "podpora"],
            ["{{未使用のアイテムを削除}}", "Odstránenie nepoužívaných položiek"],
            ["{{レイヤーをペースト}}", "Vložiť vrstvu."],
            ["{{レイヤーをコピー}}", "Kopírovanie vrstvy"],
            ["{{フレームをペースト}}", "Vložiť rám."],
            ["{{フレームをコピー}}", "Rámček na kopírovanie."],
            ["{{キーフレームを削除}}", "Odstránenie kľúčových snímok."],
            ["{{キーフレームに空のキーフレームを追加できません}}", "Nie je možné pridať prázdne kľúčové snímky do kľúčových snímok"],
            ["{{ズームツール}}", "Nástroj na zväčšenie"],
            ["{{タイムライン幅の拡大・縮小}}", "Rozšírenie a zmenšenie šírky časovej osi"],
            ["{{ガイドレイヤー}}", "vodiaca vrstva"],
            ["{{音量設定}}", "Nastavenie hlasitosti"],
            ["{{サウンドを削除}}", "Odstráňte zvuk."],
            ["{{カスタムループ}}", "prispôsobená slučka"],
            ["{{読込のみ}}", "Len na čítanie"],
            ["{{書込を許可}}", "povolenie na vysielanie"],
            ["{{単一行}}", "jednoduchý riadok"],
            ["{{複数行}}", "multiline"],
            ["{{自動で折り返し}}", "Automatický obrat"],
            ["{{左寄せ}}", "zarovnanie doľava"],
            ["{{中央揃え}}", "centrovanie"],
            ["{{右寄せ}}", "zarovnanie doprava"],
            ["{{放射状グラデーション}}", "radiálna gradácia"],
            ["{{線形グラデーション}}", "lineárny gradient"],
            ["{{画像}}", "Obrázok."],
            ["{{画像選択}}", "Výber obrázkov"],
            ["{{種別}}", "klasifikácia"],
            ["{{Shapeの色設定}}", "Nastavenia farieb tvaru"],
            ["{{変形}}", "deformácia"],
            ["{{カラー効果}}", "farebný efekt"],
            ["{{フィルター}}", "filter"],
            ["{{Shapeを複製}}", "Duplikovaný tvar."],
            ["{{読み込み}}", "prečítajte si"],
            ["{{新規フォルダー}}", "Nový priečinok"],
            ["{{新規MovieClip}}", "Nový filmový klip."],
            ["{{枠に合わせてテキストをリサイズ}}", "Zmeňte veľkosť textu tak, aby sa zmestil do rámu."],
            ["{{テキストに合わせて枠をリサイズ}}", "Zmeňte veľkosť rámu tak, aby sa doň zmestil text."],
            ["{{リサイズしない}}", "Žiadna zmena veľkosti"],
            ["{{フォント}}", "písmo"],
            ["{{テキスト}}", "Text."],
            ["{{ループ}}", "slučka"],
            ["{{音量}}", "hlasitosť"],
            ["{{ビデオ}}", "Video."],
            ["{{イージング}}", "uľahčenie"],
            ["{{サウンド}}", "zvuk"],
            ["{{シンボル}}", "symbol"],
            ["{{名前}}", "Názov."],
            ["{{オブジェクト}}", "objekt"],
            ["{{ステージ設定}}", "Nastavenie scény"],
            ["{{プレビュー}}", "náhľad"],
            ["{{削除}}", "vymazanie"],
            ["{{ペースト}}", "vložte"],
            ["{{コピー}}", "kopírovať"],
            ["{{プラグインメニュー}}", "Ponuka zásuvných modulov"],
            ["{{トゥイーン}}", "medzi"],
            ["{{カーブポインターの追加}}", "Dodatočný ukazovateľ krivky."],
            ["{{パスの結合}}", "Spájanie ciest"],
            ["{{シェイプ}}", "tvar"],
            ["{{キーフレームに配分}}", "Priradenie ku kľúčovým snímkam"],
            ["{{レイヤーに配分}}", "Priradenie vrstvám"],
            ["{{タイムライン}}", "časová os"],
            ["{{整列}}", "zarovnanie"],
            ["{{最背面}}", "najnovšie"],
            ["{{ひとつ背面へ}}", "Jeden vzadu."],
            ["{{ひとつ前面へ}}", "Jeden dopredu."],
            ["{{最前面}}", "Predný"],
            ["{{重ね順}}", "superpozície"],
            ["{{プラグイン}}", "zásuvný modul"],
            ["{{ライブラリ}}", "knižnica"],
            ["{{プロパティ}}", "majetok"],
            ["{{マスクレイヤー}}", "vrstva masky"],
            ["{{通常レイヤー}}", "Normálna vrstva"],
            ["{{モーショントゥイーンの削除}}", "Odstránenie pohybových tweensov."],
            ["{{モーショントゥイーンの追加}}", "Ďalšie pohybové tweety."],
            ["{{モーダル表示}}", "modálne označenie"],
            ["{{言語}}", "Jazyk."],
            ["{{フォーマット}}", "formát"],
            ["{{含める}}", "zahŕňať"],
            ["{{含めない}}", "nezahŕňať"],
            ["{{使い方、リファレンス}}", "Použitie, odkaz."],
            ["{{非表示レイヤー}}", "skrytá vrstva"],
            ["{{設定}}", "nastavenie"],
            ["{{デフォルトのループを利用する}}", "Použite predvolenú slučku."],
            ["{{フレームピッカー}}", "vyberač rámov"],
            ["{{左揃え}}", "ľavé ospravedlnenie"],
            ["{{中央揃え(水平方向)}}", "Centrované (horizontálne)"],
            ["{{右揃え}}", "správne odôvodnenie"],
            ["{{上揃え}}", "odôvodnenie"],
            ["{{中央揃え(垂直方向)}}", "Vystredené (vertikálne)"],
            ["{{下揃え}}", "odôvodnenie"],
            ["{{開始フレーム}}", "počiatočný rámec"],
            ["{{終了フレーム}}", "koncový rám"],
            ["{{ループで再生}}", "Prehrávanie v slučke"],
            ["{{1回再生}}", "1 prehrávanie"],
            ["{{指定したフレームで固定}}", "Opravené v zadanom ráme."],
            ["{{1回逆再生}}", "1 spätné prehrávanie"],
            ["{{逆ループで再生}}", "Prehrávanie v spätnej slučke."],
            ["{{画面の拡大・縮小}}", "Približovanie a odďaľovanie obrazovky"],
            ["{{カスタムイージングデータを保存}}", "Uloženie vlastných údajov o zmiernení."],
            ["{{カスタムイージングデータの読込}}", "Čítanie vlastných údajov o uvoľnení."],
            ["{{プレビューのON/OFF}}", "Zapnutie/vypnutie náhľadu."],
            ["{{フォント枠サイズ}}", "veľkosť rámčeka písma"],
            ["{{フォント枠カラー}}", "Farba rámu písma"],
            ["{{オニオンスキン}}", "cibuľová šupka"],
            ["{{バケツツール}}", "Náradie s vedrom"],
            ["{{ペンツール}}", "nástroj pero"],
            ["{{ダブルクリックでカーブポイントが追加されます}}", "Dvojitým kliknutím pridáte bod krivky"],
            ["{{選択ツール}}", "nástroj na výber"],
            ["{{Shape変形ツール}}", "Nástroje na deformáciu tvaru"],
            ["{{テキストツール}}", "textový nástroj"],
            ["{{矩形ツール}}", "Nástroj obdĺžnik"],
            ["{{楕円ツール}}", "Eliptické nástroje"],
            ["{{角丸矩形ツール}}", "Nástroj zaoblený rohový obdĺžnik"],
            ["{{塗りのカラー}}", "Farba farby"],
            ["{{線のカラー}}", "Farba čiary"],
            ["{{線の太さ}}", "hrúbka čiary"],
            ["{{プロジェクトデータの読込}}", "Čítanie údajov o projekte"],
            ["{{プロジェクトデータを保存}}", "Uloženie údajov o projekte."],
            ["{{書き出し}}", "úvodná veta alebo odsek"],
            ["{{Discordへ移動}}", "Prejsť na službu Discord"],
            ["{{バグ報告}}", "hlásenie chyby"],
            ["{{設定}}", "nastavenie (počítača alebo súboru atď.)"],
            ["{{タブを追加}}", "Pridať kartu."],
            ["{{タブの一覧を表示・移動}}", "Zobrazenie a presun zoznamu kariet"],
            ["{{スクリプトを追加}}", "Pridať skript."],
            ["{{キーフレームを追加}}", "Pridanie kľúčových snímok."],
            ["{{空のキーフレームを追加}}", "Pridanie prázdnych kľúčových snímok."],
            ["{{フレームを追加}}", "Pridať rám."],
            ["{{フレームを削除}}", "Odstráňte rám."],
            ["{{再生}}", "regenerácia"],
            ["{{停止}}", "pozastavenie hudby, tanca atď. na znak smútku"],
            ["{{ループ設定}}", "Nastavenia slučky"],
            ["{{レイヤーを追加}}", "Pridať vrstvu."],
            ["{{レイヤーを削除}}", "Odstrániť vrstvu."],
            ["{{全てのレイヤーをハイライト}}", "Zvýraznenie všetkých vrstiev"],
            ["{{全てのレイヤーを非表示}}", "Skryť všetky vrstvy"],
            ["{{全てのレイヤーをロック}}", "Uzamknite všetky vrstvy."],
            ["{{比率を固定}}", "Pevný pomer"],
            ["{{ステージの幅}}", "Šírka javiska"],
            ["{{背景色}}", "farba pozadia"],
            ["{{ステージの高さ}}", "Výška javiska."],
            ["{{フレームレート}}", "snímková frekvencia"],
            ["{{シンボル名}}", "názov symbolu"],
            ["{{イージング設定}}", "Uľahčenie nastavenia"],
            ["{{ビデオの音量設定}}", "Nastavenia hlasitosti videa"],
            ["{{自動再生}}", "automatické prehrávanie"],
            ["{{テキストエリアのボーダー設定}}", "Nastavenia hraníc pre textové oblasti."],
            ["{{テキスト入力設定}}", "nastavenie zadávania textu"],
            ["{{フォント選択}}", "Výber písma"],
            ["{{自動サイズ調整}}", "Automatická zmena veľkosti"],
            ["{{フォントスタイルタイプ}}", "typ štýlu písma"],
            ["{{行揃え}}", "zdôvodniť"],
            ["{{改行設定}}", "nastavenie prerušenia riadku"],
            ["{{スクロール設定}}", "Nastavenia posúvania"],
            ["{{フォントサイズ}}", "veľkosť písma"],
            ["{{フォントカラー}}", "farba písma"],
            ["{{行間}}", "medzi riadkami"],
            ["{{文字幅}}", "šírka znaku"],
            ["{{左マージン}}", "ľavý okraj"],
            ["{{右マージン}}", "pravý okraj"],
            ["{{カラー種別の選択}}", "Vyberte typ farby"],
            ["{{背景画像の選択}}", "Výber obrázka na pozadí"],
            ["{{カラーポインターを追加}}", "Dodatočný farebný ukazovateľ."],
            ["{{カラー値}}", "hodnota farby"],
            ["{{アルファ(0%-100%)}}", "Alfa (0%-100%)"],
            ["{{アルファ値}}", "hodnota alfa"],
            ["{{選択対象の幅}}", "Šírka cieľa výberu"],
            ["{{選択対象のX座標}}", "X-ová súradnica cieľa výberu"],
            ["{{選択対象の高さ}}", "Výška cieľa výberu"],
            ["{{選択対象のY座標}}", "Y-ová súradnica cieľa výberu"],
            ["{{選択対象の幅の伸縮}}", "Rozťahovanie a zmenšovanie šírky cieľa výberu"],
            ["{{選択対象を回転}}", "Výber otáčania"],
            ["{{選択対象の高さの伸縮}}", "Rozšírenie a zmenšenie výšky cieľa výberu."],
            ["{{アルファオフセット(-255〜255)}}", "Alpha offset (-255 až 255)"],
            ["{{赤(0%-100%)}}", "Červená (0%-100%)"],
            ["{{赤オフセット(-255〜255)}}", "Červený posun (-255 až 255)"],
            ["{{緑(0%-100%)}}", "Zelená (0%-100%)"],
            ["{{緑オフセット(-255〜255)}}", "Zelený posun (-255 až 255)"],
            ["{{青(0%-100%)}}", "Modrá (0%-100%)"],
            ["{{青オフセット(-255〜255)}}", "Modrý posun (-255 až 255)"],
            ["{{ブレンドモード}}", "režim prelínania"],
            ["{{フィルターを選択}}", "Vyberte filter"],
            ["{{フィルターを追加}}", "Pridať filter."],
            ["{{サウンドを追加}}", "Pridajte zvuk."],
            ["{{フィルターを表示・非表示する}}", "Zobrazenie/skrytie filtrov"],
            ["{{フィルターを削除}}", "Odstrániť filtre."],
            ["{{水平方向にぼかす}}", "Rozmazanie vo vodorovnom smere."],
            ["{{垂直方向にぼかす}}", "Vertikálne rozmazanie."],
            ["{{フィルター強度}}", "Pevnosť filtra"],
            ["{{フィルター角度}}", "Uhol filtra"],
            ["{{シャドウのアルファ}}", "Stínová Alfa."],
            ["{{シャドウのカラー}}", "Farby tieňov."],
            ["{{フィルター距離}}", "Vzdialenosť filtra"],
            ["{{ハイライトのカラー}}", "Farebné zvýraznenia"],
            ["{{ハイライトのアルファ}}", "Zvýraznenie Alpha."],
            ["{{グラデーションカラー}}", "farba gradácie"],
            ["{{グラデーションのアルファ}}", "Alfa gradientu"],
            ["{{タブの移動・名前を変更}}", "Presúvanie a premenovanie kariet"],
            ["{{プロジェクトを閉じる}}", "Uzavrieť projekt"],
            ["{{上下に移動}}", "Pohyb hore a dole"],
            ["{{レイヤー変更(ダブルクリック)}}", "Zmena vrstvy (dvojité kliknutie)"],
            ["{{レイヤーをハイライト}}", "Vrstvy zvýraznenia."],
            ["{{レイヤーを非表示}}", "Skryť vrstvy."],
            ["{{レイヤーをロック}}", "Vrstvy zámku."],
            ["{{カーブポインター(ダブルクリックでON/OFF)}}", "Ukazovateľ krivky (dvojitým kliknutím ho zapnete/vypnete)"],
            ["{{インスタンス名}}", "názov inštancie"],
            ["{{ライブラリ内の検索}}", "Vyhľadávanie v knižnici"],
            ["{{フレームラベル}}", "Štítok rámu"],
            ["{{プロジェクトが保存されていない場合、このタブのプロジェクトデータを復旧する事はできません。タブを削除しますか？}}}}", "Ak projekt nie je uložený, údaje projektu pre túto kartu nie je možné obnoviť. Chcete kartu vymazať?}}"]
        ]);
    }
}
