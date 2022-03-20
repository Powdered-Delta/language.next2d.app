/**
 * @class
 * @extends Language
 */
class Japanese extends Language
{
    /**
     * @constructor
     * @public
     */
    constructor()
    {
        super();
    }

    /**
     * @return {Map}
     * @method
     * @public
     */
    createMapping ()
    {
        return new Map([
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
            ["{{短形ツール}}", "短形ツール"],
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
