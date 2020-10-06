<?php
$viewdefs['Accounts'] = 
array (
  'base' => 
  array (
    'view' => 
    array (
      'record' => 
      array (
        'buttons' => 
        array (
          0 => 
          array (
            'type' => 'button',
            'name' => 'cancel_button',
            'label' => 'LBL_CANCEL_BUTTON_LABEL',
            'css_class' => 'btn-invisible btn-link',
            'showOn' => 'edit',
            'events' => 
            array (
              'click' => 'button:cancel_button:click',
            ),
          ),
          1 => 
          array (
            'type' => 'rowaction',
            'event' => 'button:save_button:click',
            'name' => 'save_button',
            'label' => 'LBL_SAVE_BUTTON_LABEL',
            'css_class' => 'btn btn-primary',
            'showOn' => 'edit',
            'acl_action' => 'edit',
          ),
          2 => 
          array (
            'type' => 'actiondropdown',
            'name' => 'main_dropdown',
            'primary' => true,
            'showOn' => 'view',
            'buttons' => 
            array (
              0 => 
              array (
                'type' => 'rowaction',
                'event' => 'button:edit_button:click',
                'name' => 'edit_button',
                'label' => 'LBL_EDIT_BUTTON_LABEL',
                'acl_action' => 'edit',
              ),
              1 => 
              array (
                'type' => 'shareaction',
                'name' => 'share',
                'label' => 'LBL_RECORD_SHARE_BUTTON',
                'acl_action' => 'view',
              ),
              2 => 
              array (
                'type' => 'pdfaction',
                'name' => 'download-pdf',
                'label' => 'LBL_PDF_VIEW',
                'action' => 'download',
                'acl_action' => 'view',
              ),
              3 => 
              array (
                'type' => 'pdfaction',
                'name' => 'email-pdf',
                'label' => 'LBL_PDF_EMAIL',
                'action' => 'email',
                'acl_action' => 'view',
              ),
              4 => 
              array (
                'type' => 'divider',
              ),
              5 => 
              array (
                'type' => 'rowaction',
                'event' => 'button:find_duplicates_button:click',
                'name' => 'find_duplicates_button',
                'label' => 'LBL_DUP_MERGE',
                'acl_action' => 'edit',
              ),
              6 => 
              array (
                'type' => 'rowaction',
                'event' => 'button:duplicate_button:click',
                'name' => 'duplicate_button',
                'label' => 'LBL_DUPLICATE_BUTTON_LABEL',
                'acl_module' => 'Accounts',
                'acl_action' => 'create',
              ),
              7 => 
              array (
                'type' => 'rowaction',
                'event' => 'button:historical_summary_button:click',
                'name' => 'historical_summary_button',
                'label' => 'LBL_HISTORICAL_SUMMARY',
                'acl_action' => 'view',
              ),
              8 => 
              array (
                'type' => 'rowaction',
                'event' => 'button:audit_button:click',
                'name' => 'audit_button',
                'label' => 'LNK_VIEW_CHANGE_LOG',
                'acl_action' => 'view',
              ),
              9 => 
              array (
                'type' => 'divider',
              ),
              10 => 
              array (
                'type' => 'rowaction',
                'event' => 'button:delete_button:click',
                'name' => 'delete_button',
                'label' => 'LBL_DELETE_BUTTON_LABEL',
                'acl_action' => 'delete',
              ),
            ),
          ),
          3 => 
          array (
            'name' => 'sidebar_toggle',
            'type' => 'sidebartoggle',
          ),
        ),
        'panels' => 
        array (
          0 => 
          array (
            'name' => 'panel_header',
            'label' => 'LBL_PANEL_HEADER',
            'header' => true,
            'fields' => 
            array (
              0 => 
              array (
                'name' => 'picture',
                'type' => 'avatar',
                'size' => 'large',
                'dismiss_label' => true,
                'readonly' => true,
              ),
              1 => 
              array (
                'name' => 'name',
              ),
              2 => 
              array (
                'name' => 'favorite',
                'label' => 'LBL_FAVORITE',
                'type' => 'favorite',
                'dismiss_label' => true,
              ),
              3 => 
              array (
                'name' => 'follow',
                'label' => 'LBL_FOLLOW',
                'type' => 'follow',
                'readonly' => true,
                'dismiss_label' => true,
              ),
            ),
          ),
          1 => 
          array (
            'newTab' => true,
            'panelDefault' => 'expanded',
            'name' => 'LBL_RECORDVIEW_PANEL1',
            'label' => 'LBL_RECORDVIEW_PANEL1',
            'columns' => 2,
            'labelsOnTop' => 1,
            'placeholders' => 1,
            'fields' => 
            array (
              0 => 
              array (
                'name' => 'us_id_candidato_c',
                'label' => 'LBL_US_ID_CANDIDATO',
              ),
              1 => 
              array (
              ),
              2 => 
              array (
                'name' => 'ca_nombre_c',
                'label' => 'LBL_CA_NOMBRE',
              ),
              3 => 
              array (
                'name' => 'ca_apellido_paterno_c',
                'label' => 'LBL_CA_APELLIDO_PATERNO',
              ),
              4 => 
              array (
                'name' => 'ca_apellido_materno_c',
                'label' => 'LBL_CA_APELLIDO_MATERNO',
              ),
              5 => 
              array (
                'name' => 'ca_sexo_c',
                'label' => 'LBL_CA_SEXO',
              ),
              6 => 'phone_office',
              7 => 'email',
              8 => 
              array (
                'name' => 'ca_fecha_de_nacimiento_c',
                'label' => 'LBL_CA_FECHA_DE_NACIMIENTO',
              ),
              9 => 
              array (
              ),
              10 => 
              array (
                'name' => 'ca_edad_c',
                'label' => 'LBL_CA_EDAD',
              ),
              11 => 
              array (
                'name' => 'ca_lis_consentimiento_c',
                'label' => 'LBL_CA_LIS_CONSENTIMIENTO',
              ),
            ),
          ),
          2 => 
          array (
            'newTab' => true,
            'panelDefault' => 'expanded',
            'name' => 'LBL_RECORDVIEW_PANEL4',
            'label' => 'LBL_RECORDVIEW_PANEL4',
            'columns' => 2,
            'labelsOnTop' => 1,
            'placeholders' => 1,
            'fields' => 
            array (
              0 => 
              array (
                'name' => 'pa_fecha_de_diagnostico_c',
                'label' => 'LBL_PA_FECHA_DE_DIAGNOSTICO',
              ),
              1 => 
              array (
                'name' => 'pc_prioridad_c',
                'label' => 'LBL_PC_PRIORIDAD',
              ),
              2 => 
              array (
                'name' => 'estatus_paciente_c',
                'label' => 'LBL_ESTATUS_PACIENTE',
              ),
              3 => 
              array (
                'name' => 'especifique_c',
                'label' => 'LBL_ESPECIFIQUE',
              ),
              4 => 
              array (
                'name' => 'un_unidades_accounts_1_name',
              ),
              5 => 
              array (
                'name' => 'in_instituciones_accounts_1_name',
                'label' => 'LBL_IN_INSTITUCIONES_ACCOUNTS_1_FROM_IN_INSTITUCIONES_TITLE',
              ),
            ),
          ),
          3 => 
          array (
            'newTab' => false,
            'panelDefault' => 'expanded',
            'name' => 'LBL_RECORDVIEW_PANEL2',
            'label' => 'LBL_RECORDVIEW_PANEL2',
            'columns' => 2,
            'labelsOnTop' => 1,
            'placeholders' => 1,
            'fields' => 
            array (
              0 => 
              array (
                'name' => 'ca_cp_c',
                'label' => 'LBL_CA_CP',
              ),
              1 => 
              array (
                'name' => 'ca_calle_c',
                'label' => 'LBL_CA_CALLE',
              ),
              2 => 
              array (
                'name' => 'numero_interior_c',
                'label' => 'LBL_NUMERO_INTERIOR',
              ),
              3 => 
              array (
                'name' => 'numero_exterior_c',
                'label' => 'LBL_NUMERO_EXTERIOR',
              ),
              4 => 
              array (
                'name' => 'ca_curp_c',
                'label' => 'LBL_CA_CURP',
              ),
              5 => 
              array (
                'name' => 'ca_rfc_c',
                'label' => 'LBL_CA_RFC',
              ),
              6 => 
              array (
                'name' => 'ca_estado_c',
                'label' => 'LBL_CA_ESTADO',
              ),
              7 => 
              array (
                'name' => 'ca_ciudad_c',
                'label' => 'LBL_CA_CIUDAD',
              ),
              8 => 
              array (
                'name' => 'ca_colonia_c',
                'label' => 'LBL_CA_COLONIA',
              ),
              9 => 
              array (
                'name' => 'alcacia_o_minicipio_c',
                'label' => 'LBL_ALCACIA_O_MINICIPIO',
              ),
            ),
          ),
          4 => 
          array (
            'newTab' => true,
            'panelDefault' => 'expanded',
            'name' => 'LBL_RECORDVIEW_PANEL3',
            'label' => 'LBL_RECORDVIEW_PANEL3',
            'columns' => 2,
            'labelsOnTop' => 1,
            'placeholders' => 1,
            'fields' => 
            array (
              0 => 
              array (
                'name' => 'description',
                'span' => 6,
              ),
              1 => 
              array (
                'name' => 'team_name',
                'span' => 6,
              ),
            ),
          ),
        ),
        'templateMeta' => 
        array (
          'useTabs' => true,
        ),
      ),
    ),
  ),
);
