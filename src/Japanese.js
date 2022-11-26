/**
 * @class
 * @extends Language
 */
class Japanese extends Language
{
    /**
     * @return {Map}
     * @method
     * @public
     */
    createMapping ()
    {
        return new Map([
            ["{{JSONを生成}}", "JSONを生成"],
            ["{{ファイルを生成}}", "ファイルを生成"],
            ["{{N2Dファイルの読み込み}}", "N2Dファイルの読み込み"],
            ["{{JSONの読み込み}}", "JSONの読み込み"],
            ["{{zlibの解凍}}", "zlibの解凍"],
            ["{{エンコード}}", "エンコード"],
            ["{{zlibの圧縮}}", "zlibの圧縮"],
            ["{{外部ファイルの読み込み}}", "外部ファイルの読み込み"],
            ["{{バイナリデータを生成}}", "バイナリデータを生成"],
            ["{{データベースを起動}}", "データベースを起動"],
            ["{{データを保存中}}", "データを保存中"],
            ["{{完了}}", "完了"],
            ["{{ステージ左揃え}}", "ステージ左揃え"],
            ["{{ステージ中央揃え(水平方向)}}", "ステージ中央揃え(水平方向)"],
            ["{{ステージ右揃え}}", "ステージ右揃え"],
            ["{{ステージ上揃え}}", "ステージ上揃え"],
            ["{{ステージ中央揃え(垂直方向)}}", "ステージ中央揃え(垂直方向)"],
            ["{{ステージ下揃え}}", "ステージ下揃え"],
            ["{{定規}}", "定規"],
            ["{{表示}}", "表示"],
            ["{{ショートカット}}", "ショートカット"],
            ["{{レイヤーを複製}}", "レイヤーを複製"],
            ["{{未使用のフォルダを削除}}", "未使用のフォルダを削除"],
            ["{{同名のアイテムが存在します}}", "同名のアイテムが存在します"],
            ["{{追加ファイル}}", "追加ファイル"],
            ["{{既存のコンテンツ}}", "既存のコンテンツ"],
            ["{{上書きするか、ファイル名を変更して追加するか、スキップを選択する事ができます}}", "上書きするか、ファイル名を変更して追加するか、スキップを選択する事ができます"],
            ["{{全て上書き}}", "全て上書き"],
            ["{{全てスキップ}}", "全てスキップ"],
            ["{{追加・上書き}}", "追加・上書き"],
            ["{{スキップ}}", "スキップ"],
            ["{{表示確認したいフレームを指定}}", "表示確認したいフレームを指定"],
            ["{{ファイル名を指定}}", "ファイル名を指定"],
            ["{{ファイル名}}", "ファイル名"],
            ["{{終了フレームを指定}}", "終了フレームを指定"],
            ["{{開始フレームを指定}}", "開始フレームを指定"],
            ["{{フレーム設定}}", "フレーム設定"],
            ["{{書き出し設定}}", "書き出し設定"],
            ["{{ファイル形式の選択}}", "ファイル形式の選択"],
            ["{{ファイル形式}}", "ファイル形式"],
            ["{{サイズ設定}}", "サイズ設定"],
            ["{{左上}}", "左上"],
            ["{{中央上}}", "中央上"],
            ["{{右上}}", "右上"],
            ["{{中央左}}", "中央左"],
            ["{{中央}}", "中央"],
            ["{{中央右}}", "中央右"],
            ["{{左下}}", "左下"],
            ["{{中央下}}", "中央下"],
            ["{{右下}}", "右下"],
            ["{{中心点のX座標}}", "中心点のX座標"],
            ["{{中心点のY座標}}", "中心点のY座標"],
            ["{{MovieClipに変換}}", "MovieClipに変換"],
            ["{{変換}}", "変換"],
            ["{{ループ回数}}", "ループ回数"],
            ["{{カーブポインターの削除}}", "カーブポインターの削除"],
            ["{{ステージ基準}}", "ステージ基準"],
            ["{{閉じる}}", "閉じる"],
            ["{{保存}}", "保存"],
            ["{{リセット}}", "リセット"],
            ["{{スクリーン}}", "スクリーン"],
            ["{{ショートカット設定}}", "ショートカット設定"],
            ["{{レイヤーカラー}}", "レイヤーカラー"],
            ["{{Next2Dを支援する}}", "Next2Dを支援する"],
            ["{{サポート}}", "サポート"],
            ["{{未使用のアイテムを削除}}", "未使用のアイテムを削除"],
            ["{{レイヤーをペースト}}", "レイヤーをペースト"],
            ["{{レイヤーをコピー}}", "レイヤーをコピー"],
            ["{{フレームをペースト}}", "フレームをペースト"],
            ["{{フレームをコピー}}", "フレームをコピー"],
            ["{{キーフレームを削除}}", "キーフレームを削除"],
            ["{{キーフレームに空のキーフレームを追加できません}}", "キーフレームに空のキーフレームを追加できません"],
            ["{{ズームツール}}", "ズームツール"],
            ["{{タイムライン幅の拡大・縮小}}", "タイムライン幅の拡大・縮小"],
            ["{{ガイドレイヤー}}", "ガイドレイヤー"],
            ["{{音量設定}}", "音量設定"],
            ["{{サウンドを削除}}", "サウンドを削除"],
            ["{{カスタムループ}}", "カスタムループ"],
            ["{{読込のみ}}", "読込のみ"],
            ["{{書込を許可}}", "書込を許可"],
            ["{{単一行}}", "単一行"],
            ["{{複数行}}", "複数行"],
            ["{{自動で折り返し}}", "自動で折り返し"],
            ["{{左寄せ}}", "左寄せ"],
            ["{{中央揃え}}", "中央揃え"],
            ["{{右寄せ}}", "右寄せ"],
            ["{{放射状グラデーション}}", "放射状グラデーション"],
            ["{{線形グラデーション}}", "線形グラデーション"],
            ["{{画像}}", "画像"],
            ["{{画像選択}}", "画像選択"],
            ["{{種別}}", "種別"],
            ["{{Shapeの色設定}}", "Shapeの色設定"],
            ["{{変形}}", "変形"],
            ["{{カラー効果}}", "カラー効果"],
            ["{{フィルター}}", "フィルター"],
            ["{{Shapeを複製}}", "Shapeを複製"],
            ["{{読み込み}}", "読み込み"],
            ["{{新規フォルダー}}", "新規フォルダー"],
            ["{{新規MovieClip}}", "新規MovieClip"],
            ["{{枠に合わせてテキストをリサイズ}}", "枠に合わせてテキストをリサイズ"],
            ["{{テキストに合わせて枠をリサイズ}}", "テキストに合わせて枠をリサイズ"],
            ["{{リサイズしない}}", "リサイズしない"],
            ["{{フォント}}", "フォント"],
            ["{{テキスト}}", "テキスト"],
            ["{{ループ}}", "ループ"],
            ["{{音量}}", "音量"],
            ["{{ビデオ}}", "ビデオ"],
            ["{{イージング}}", "イージング"],
            ["{{サウンド}}", "サウンド"],
            ["{{シンボル}}", "シンボル"],
            ["{{名前}}", "名前"],
            ["{{オブジェクト}}", "オブジェクト"],
            ["{{ステージ設定}}", "ステージ設定"],
            ["{{プレビュー}}", "プレビュー"],
            ["{{削除}}", "削除"],
            ["{{ペースト}}", "ペースト"],
            ["{{コピー}}", "コピー"],
            ["{{プラグインメニュー}}", "プラグインメニュー"],
            ["{{トゥイーン}}", "トゥイーン"],
            ["{{カーブポインターの追加}}", "カーブポインターの追加"],
            ["{{パスの結合}}", "パスの結合"],
            ["{{シェイプ}}", "シェイプ"],
            ["{{キーフレームに配分}}", "キーフレームに配分"],
            ["{{レイヤーに配分}}", "レイヤーに配分"],
            ["{{タイムライン}}", "タイムライン"],
            ["{{整列}}", "整列"],
            ["{{最背面}}", "最背面"],
            ["{{ひとつ背面へ}}", "ひとつ背面へ"],
            ["{{ひとつ前面へ}}", "ひとつ前面へ"],
            ["{{最前面}}", "最前面"],
            ["{{重ね順}}", "重ね順"],
            ["{{プラグイン}}", "プラグイン"],
            ["{{ライブラリ}}", "ライブラリ"],
            ["{{プロパティ}}", "プロパティ"],
            ["{{マスクレイヤー}}", "マスクレイヤー"],
            ["{{通常レイヤー}}", "通常レイヤー"],
            ["{{モーショントゥイーンの削除}}", "モーショントゥイーンの削除"],
            ["{{モーショントゥイーンの追加}}", "モーショントゥイーンの追加"],
            ["{{モーダル表示}}", "モーダル表示"],
            ["{{言語}}", "言語"],
            ["{{フォーマット}}", "フォーマット"],
            ["{{含める}}", "含める"],
            ["{{含めない}}", "含めない"],
            ["{{使い方、リファレンス}}", "使い方、リファレンス"],
            ["{{非表示レイヤー}}", "非表示レイヤー"],
            ["{{設定}}", "設定"],
            ["{{デフォルトのループを利用する}}", "デフォルトのループを利用する"],
            ["{{フレームピッカー}}", "フレームピッカー"],
            ["{{左揃え}}", "左揃え"],
            ["{{中央揃え(水平方向)}}", "中央揃え(水平方向)"],
            ["{{右揃え}}", "右揃え"],
            ["{{上揃え}}", "上揃え"],
            ["{{中央揃え(垂直方向)}}", "中央揃え(垂直方向)"],
            ["{{下揃え}}", "下揃え"],
            ["{{開始フレーム}}", "開始フレーム"],
            ["{{終了フレーム}}", "終了フレーム"],
            ["{{ループで再生}}", "ループで再生"],
            ["{{1回再生}}", "1回再生"],
            ["{{指定したフレームで固定}}", "指定したフレームで固定"],
            ["{{1回逆再生}}", "1回逆再生"],
            ["{{逆ループで再生}}", "逆ループで再生"],
            ["{{画面の拡大・縮小}}", "画面の拡大・縮小"],
            ["{{カスタムイージングデータを保存}}", "カスタムイージングデータを保存"],
            ["{{カスタムイージングデータの読込}}", "カスタムイージングデータの読込"],
            ["{{プレビューのON/OFF}}", "プレビューのON/OFF"],
            ["{{フォント枠サイズ}}", "フォント枠サイズ"],
            ["{{フォント枠カラー}}", "フォント枠カラー"],
            ["{{オニオンスキン}}", "オニオンスキン"],
            ["{{バケツツール}}", "バケツツール"],
            ["{{ペンツール}}", "ペンツール"],
            ["{{ダブルクリックでカーブポイントが追加されます}}", "ダブルクリックでカーブポイントが追加されます"],
            ["{{選択ツール}}", "選択ツール"],
            ["{{Shape変形ツール}}", "Shape変形ツール"],
            ["{{テキストツール}}", "テキストツール"],
            ["{{矩形ツール}}", "矩形ツール"],
            ["{{楕円ツール}}", "楕円ツール"],
            ["{{角丸矩形ツール}}", "角丸矩形ツール"],
            ["{{塗りのカラー}}", "塗りのカラー"],
            ["{{線のカラー}}", "線のカラー"],
            ["{{線の太さ}}", "線の太さ"],
            ["{{プロジェクトデータの読込}}", "プロジェクトデータの読込"],
            ["{{プロジェクトデータを保存}}", "プロジェクトデータを保存"],
            ["{{書き出し}}", "書き出し"],
            ["{{Discordへ移動}}", "Discordへ移動"],
            ["{{バグ報告}}", "バグ報告"],
            ["{{設定}}", "設定"],
            ["{{タブを追加}}", "タブを追加"],
            ["{{タブの一覧を表示・移動}}", "タブの一覧を表示・移動"],
            ["{{スクリプトを追加}}", "スクリプトを追加"],
            ["{{キーフレームを追加}}", "キーフレームを追加"],
            ["{{空のキーフレームを追加}}", "空のキーフレームを追加"],
            ["{{フレームを追加}}", "フレームを追加"],
            ["{{フレームを削除}}", "フレームを削除"],
            ["{{再生}}", "再生"],
            ["{{停止}}", "停止"],
            ["{{ループ設定}}", "ループ設定"],
            ["{{レイヤーを追加}}", "レイヤーを追加"],
            ["{{レイヤーを削除}}", "レイヤーを削除"],
            ["{{全てのレイヤーをハイライト}}", "全てのレイヤーをハイライト"],
            ["{{全てのレイヤーを非表示}}", "全てのレイヤーを非表示"],
            ["{{全てのレイヤーをロック}}", "全てのレイヤーをロック"],
            ["{{比率を固定}}", "比率を固定"],
            ["{{ステージの幅}}", "ステージの幅"],
            ["{{背景色}}", "背景色"],
            ["{{ステージの高さ}}", "ステージの高さ"],
            ["{{フレームレート}}", "フレームレート"],
            ["{{シンボル名}}", "シンボル名"],
            ["{{イージング設定}}", "イージング設定"],
            ["{{ビデオの音量設定}}", "ビデオの音量設定"],
            ["{{自動再生}}", "自動再生"],
            ["{{テキストエリアのボーダー設定}}", "テキストエリアのボーダー設定"],
            ["{{テキスト入力設定}}", "テキスト入力設定"],
            ["{{フォント選択}}", "フォント選択"],
            ["{{自動サイズ調整}}", "自動サイズ調整"],
            ["{{フォントスタイルタイプ}}", "フォントスタイルタイプ"],
            ["{{行揃え}}", "行揃え"],
            ["{{改行設定}}", "改行設定"],
            ["{{スクロール設定}}", "スクロール設定"],
            ["{{フォントサイズ}}", "フォントサイズ"],
            ["{{フォントカラー}}", "フォントカラー"],
            ["{{行間}}", "行間"],
            ["{{文字幅}}", "文字幅"],
            ["{{左マージン}}", "左マージン"],
            ["{{右マージン}}", "右マージン"],
            ["{{カラー種別の選択}}", "カラー種別の選択"],
            ["{{背景画像の選択}}", "背景画像の選択"],
            ["{{カラーポインターを追加}}", "カラーポインターを追加"],
            ["{{カラー値}}", "カラー値"],
            ["{{アルファ(0%-100%)}}", "アルファ(0%-100%)"],
            ["{{アルファ値}}", "アルファ値"],
            ["{{選択対象の幅}}", "選択対象の幅"],
            ["{{選択対象のX座標}}", "選択対象のX座標"],
            ["{{選択対象の高さ}}", "選択対象の高さ"],
            ["{{選択対象のY座標}}", "選択対象のY座標"],
            ["{{選択対象の幅の伸縮}}", "選択対象の幅の伸縮"],
            ["{{選択対象を回転}}", "選択対象を回転"],
            ["{{選択対象の高さの伸縮}}", "選択対象の高さの伸縮"],
            ["{{アルファオフセット(-255〜255)}}", "アルファオフセット(-255〜255)"],
            ["{{赤(0%-100%)}}", "赤(0%-100%)"],
            ["{{赤オフセット(-255〜255)}}", "赤オフセット(-255〜255)"],
            ["{{緑(0%-100%)}}", "緑(0%-100%)"],
            ["{{緑オフセット(-255〜255)}}", "緑オフセット(-255〜255)"],
            ["{{青(0%-100%)}}", "青(0%-100%)"],
            ["{{青オフセット(-255〜255)}}", "青オフセット(-255〜255)"],
            ["{{ブレンドモード}}", "ブレンドモード"],
            ["{{フィルターを選択}}", "フィルターを選択"],
            ["{{フィルターを追加}}", "フィルターを追加"],
            ["{{サウンドを追加}}", "サウンドを追加"],
            ["{{フィルターを表示・非表示する}}", "フィルターを表示・非表示する"],
            ["{{フィルターを削除}}", "フィルターを削除"],
            ["{{水平方向にぼかす}}", "水平方向にぼかす"],
            ["{{垂直方向にぼかす}}", "垂直方向にぼかす"],
            ["{{フィルター強度}}", "フィルター強度"],
            ["{{フィルター角度}}", "フィルター角度"],
            ["{{シャドウのアルファ}}", "シャドウのアルファ"],
            ["{{シャドウのカラー}}", "シャドウのカラー"],
            ["{{フィルター距離}}", "フィルター距離"],
            ["{{ハイライトのカラー}}", "ハイライトのカラー"],
            ["{{ハイライトのアルファ}}", "ハイライトのアルファ"],
            ["{{グラデーションカラー}}", "グラデーションカラー"],
            ["{{グラデーションのアルファ}}", "グラデーションのアルファ"],
            ["{{タブの移動・名前を変更}}", "タブの移動・名前を変更"],
            ["{{プロジェクトを閉じる}}", "プロジェクトを閉じる"],
            ["{{上下に移動}}", "上下に移動"],
            ["{{レイヤー変更(ダブルクリック)}}", "レイヤー変更(ダブルクリック)"],
            ["{{レイヤーをハイライト}}", "レイヤーをハイライト"],
            ["{{レイヤーを非表示}}", "レイヤーを非表示"],
            ["{{レイヤーをロック}}", "レイヤーをロック"],
            ["{{カーブポインター(ダブルクリックでON/OFF)}}", "カーブポインター(ダブルクリックでON/OFF)"],
            ["{{インスタンス名}}", "インスタンス名"],
            ["{{ライブラリ内の検索}}", "ライブラリ内の検索"],
            ["{{フレームラベル}}", "フレームラベル"],
            ["{{プロジェクトが保存されていない場合、このタブのプロジェクトデータを復旧する事はできません。タブを削除しますか？}}", "プロジェクトが保存されていない場合、このタブのプロジェクトデータを復旧する事はできません。タブを削除しますか？"]
        ]);
    }
}
